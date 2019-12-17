import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'float-item-button',
  styleUrls: ['float-item-button.component.css'],
  templateUrl: 'float-item-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatItemButtonComponent {
  @Input() icon: string;
  @Input() content: string;
  @Input() color = 'white';
  @Input() disabled = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  @ViewChild('elementref', { static: false }) elementref;
  @ViewChild('contentref', { static: false }) contentref;

  emitClickEvent($event: Event) {
    if (this.disabled) {
      return this.disabled;
    }
    this.clicked.emit($event);
  }
}
