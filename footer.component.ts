import { Component, OnInit } from '@angular/core';
import { sanpreet } from '../sanpreet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currSan : sanpreet={
    sid: "991498517" , sname :"Preetkamal" , lname :"sanpreet",
    scampus:"Davis" , stitle:"Assignment3"
  }


  constructor() { }

  ngOnInit() {
  }

}
