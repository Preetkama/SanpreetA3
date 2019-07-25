import { Component, OnInit } from '@angular/core';
import{sanpreet} from '../sanpreet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currSan : sanpreet={
    sid: "991498517" , sname :"Preetkamal" , lname :"sanpreet",
    scampus:"Davis" , stitle:"Assignment3"
  }

  constructor() { }

  ngOnInit() {
  }

}
