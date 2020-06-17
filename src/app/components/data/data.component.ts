import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  records: Object
  constructor(private myFirstService : RecordsService) { }

  ngOnInit(){
    this.myFirstService.getData().subscribe(data => {this.records = data.obj})
  }

}
