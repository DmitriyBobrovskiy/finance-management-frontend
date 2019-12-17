import {
  Component,
  Input,
  ContentChildren,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Output,
  OnChanges,
  AfterViewInit
} from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FloatItemButtonComponent } from './float-item-button.component';

@Component({
  selector: 'float-button',
  styleUrls: ['float-button.component.css'],
  templateUrl: 'float-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatButtonComponent implements AfterViewInit, OnDestroy, OnChanges {
  public state: BehaviorSubject<any>;

  @Input() icon: string;
  @Input() direction: string;
  @Input() spaceBetweenButtons = 55;
  @Input() open: Subject<boolean>;
  @Input() color = '#dd0031';
  @Input() disabled = false;
  @Output() events: Subject<any> = new Subject();
  @ContentChildren(FloatItemButtonComponent) buttons;

  private _destroy$ = new Subject();

  constructor(private cd: ChangeDetectorRef) {
    this.state = new BehaviorSubject({
      display: false,
      direction: 'top',
      event: 'start',
      spaceBetweenButtons: this.spaceBetweenButtons
    });
  }

  public toggle() {
    if (this.disabled) {
      return this.disabled;
    }
    this.state.next({
      ...this.state.getValue(),
      display: !this.state.getValue().display,
      event: !this.state.getValue().display ? 'open' : 'close'
    });
  }

  // only top and bottom support content element
  private checkDirectionType() {
    if (this.buttons.toArray()) {
      let display = 'block';

      if (this.direction === 'right' || this.direction === 'left') {
        display = 'none';
      }
      console.log(this.buttons);
      this.buttons.toArray().forEach(element => {
        element.contentref.nativeElement.style.display = display;
      });
    }
  }

  // transition
  private animateButtons(eventType) {
    this.buttons.toArray().forEach((btn, i) => {
      i += 1;
      const style = btn.elementref.nativeElement.style;

      if (eventType !== 'directionChanged' && this.state.getValue().display) {
        style.transform = 'scale(1)';
        style['transition-duration'] = '0s';

        if (btn.timeout) {
          clearTimeout(btn.timeout);
        }
      }

      setTimeout(() => {
        style['transition-duration'] = this.state.getValue().display ? `${90 + 100 * i}ms` : '';
        style.transform = this.state.getValue().display ? this.getTranslate(i) : '';
      }, 50);

      if (eventType !== 'directionChanged' && !this.state.getValue().display) {
        btn.timeout = setTimeout(() => {
          style.transform = 'scale(0)';
        }, 90 + 100 * i);
      }
    });
  }

  // get transition direction
  private getTranslate(i) {
    let animation;

    switch (this.direction) {
      case 'right':
        animation = `translate3d(${this.state.getValue().spaceBetweenButtons * i}px,0,0)`;
        break;
      case 'bottom':
        animation = `translate3d(0,${this.state.getValue().spaceBetweenButtons * i}px,0)`;
        break;
      case 'left':
        animation = `translate3d(-${this.state.getValue().spaceBetweenButtons * i}px,0,0)`;
        break;
      default:
        animation = `translate3d(0,-${this.state.getValue().spaceBetweenButtons * i}px,0)`;
        break;
    }

    return animation;
  }

  ngAfterViewInit() {
    if (this.direction) {
      // first time to check
      this.checkDirectionType();
    }

    this.buttons.toArray().map(v => {
      v.clicked.pipe(takeUntil(this._destroy$)).subscribe(() => {
        this.state.next({
          ...this.state.getValue(),
          display: false,
          event: 'close'
        });
      });
    });

    this.state.pipe(takeUntil(this._destroy$)).subscribe(v => {
      this.animateButtons(v.event);

      this.events.next({
        display: v.display,
        event: v.event,
        direction: v.direction
      });
    });
  }

  // if @Input values changes, we need check the direction type
  ngOnChanges(changes) {
    if (changes.direction && !changes.direction.firstChange) {
      this.state.next({
        ...this.state.getValue(),
        event: 'directionChanged',
        direction: changes.direction.currentValue
      });
      // if changes happens
      this.checkDirectionType();
    }

    if (changes.open && changes.open.currentValue) {
      this.open.pipe(takeUntil(this._destroy$)).subscribe(v => {
        if (v !== this.state.getValue().display) {
          this.state.next({
            ...this.state.getValue(),
            event: v ? 'open' : 'close',
            display: v
          });

          // make angular happy
          this.cd.markForCheck();
        }
      });
    }

    if (changes.spaceBetweenButtons && changes.spaceBetweenButtons.currentValue) {
      this.state.next({
        ...this.state.getValue(),
        event: 'spaceBetweenButtonsChanged',
        spaceBetweenButtons: changes.spaceBetweenButtons.currentValue
      });
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
  }
}
