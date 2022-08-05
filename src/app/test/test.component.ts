import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData:any;
  @Input('age') public age:any;

  @Output() public childEvent = new EventEmitter();

  public testText = "This is test text.";

  public person = {
    firstName: "Jack",
    lastName: "Ma"
  }

  public date = new Date();
  
  

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey, this is an event sent to parent from child.');
  }

}
