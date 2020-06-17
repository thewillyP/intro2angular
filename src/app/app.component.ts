import { Component, OnInit } from '@angular/core';
import {HelloComponent} from './components/hello/hello.component'
import { interval } from 'rxjs';
import { RecordsService } from './services/records.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records: Object
  constructor(private myFirstService : RecordsService){
    
  }
  ngOnInit(){
    this.myFirstService.getData().subscribe(data => {this.records = data.obj})
  }
  

}


