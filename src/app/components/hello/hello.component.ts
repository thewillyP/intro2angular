import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }
  myVar = 2 | 5
  i=0

  doSomeHeavyTask(){
    console.log(`Called ${this.i++} times`)
  }

  ngOnInit(): void {
  }

}
