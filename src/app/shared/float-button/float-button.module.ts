import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button.component';
import { FloatItemButtonComponent } from './float-item-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FloatButtonComponent, FloatItemButtonComponent],
  exports: [FloatButtonComponent, FloatItemButtonComponent]
})
export class FloatButtonModule { }
