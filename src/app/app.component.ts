import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularprac';
  isdisabled = false;
  ishiddden = true;
  isactive = true;
  data = "hello";
  color = 'red'
  hasError = true;
  name = "hello";
  change(e: any) {
    this.name = e.target.value;
  }
  city = "hyderabad"
  changename() {
    this.city = "bangloare"
  }
  message = "parent to child"
  arr = [10, 20, 30, 40, 50]
  msg1 = "message changed"
  arr2 = [1, 2, 3, 4, 5]
  cdata: any;
  updatemessage(e: any) {
    this.cdata = e;
  }
  @ViewChild(ChildComponent) header:any;
  childdata="";
  update() {
   this.childdata=this.header.passvalue();
  }
  @ViewChild("text") text:any;
  ngAfterViewInit()
  {
    this.text.nativeElement.onkeyup=()=>{
      console.log(this.text.nativeElement.value);
    }
  }
  updatess(e:string)
  {
console.log(e)
  }
  // changeEle()
  // { 
  //   this.temp.nativeElement.style.background="red"
  //   this.temp.nativeElement.innerText="hello"
  // }
}
