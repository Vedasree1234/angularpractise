import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() data: any;
  @Input() d1: any;
  @Output() custom = new EventEmitter();
  message = "good morning veda"
  passtoparent() {
    this.custom.emit(this.message)
  }
  updatetext(e: any) {
    this.message = e.target.value;
  }
  mymsg = "this is child component data"
  fun() {
    return true;
  }
  title = "my title"
  myvalue = "vedasree";
  passvalue() {
    return this.myvalue;
  }
}
