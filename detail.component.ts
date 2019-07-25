
import { Component, OnInit } from '@angular/core';
import { loveSongs } from '../loveSongs';
import { MYSONGS } from 'src/assets/data/mySongs';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   mySongs= MYSONGS;
  mineClass: loveSongs;
  

  constructor() { }

  ngOnInit() {
    this.onButtonClick(0);
    
  }


  ngAfterViewInit() {
    var divs = document.getElementById("myList").getElementsByTagName("div");
    for (let x=0; x < divs.length; x++) {
      divs[x].style.display = "none";
    }
  }

  onClickMe(index) {
    var divs = document.getElementById("myList").getElementsByTagName("div");

    if (divs[index].style.display == 'none'){
      divs[index].style.display = 'block';
    } 
    else {
      divs[index].style.display = 'none';
    }  
  }

  onButtonClick(index){
    this.mineClass = {
      soname: this.mySongs[index].soname,
      artist: this.mySongs[index].artist,   
      genre: this.mySongs[index].genre,
      year: this.mySongs[index].year, 
      picture: this.mySongs[index].picture   
    }
  }
}
