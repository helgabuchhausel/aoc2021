import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { File } from '@awesome-cordova-plugins/file';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-firstday',
  templateUrl: './firstday.component.html',
  styleUrls: ['./firstday.component.scss'],
})
export class FirstdayComponent implements OnInit {

  text: Observable<string>;
  numbers: number[];
  data: string;
  url = './assets/input1.txt';
  solution1: number;


  constructor(private http: HttpClient) {
    // get input
    http.get(this.url, {responseType: 'text'})
    .toPromise()
    .then( res => { this.data = res;});



  }

  ngOnInit() {}


  onClick1(): void{

    this.split();

    // calc
    this.compare();
  }

  onClick2(): void {

  }

  compare(): void {
    this.solution1 = 0;
    let prevNumber;
    let currentNumber;

    //compare
    for (let index = 0; index < this.numbers.length-1; index++) {
      if (index == 0 ){
        prevNumber = 0;
      }
      else {
        currentNumber = this.numbers[index];

        if (prevNumber < currentNumber){
          this.solution1++;
        }
        prevNumber = currentNumber;
      }
    }
  }

//split to an array
  split(){
    this.numbers = this.data.split('\r\n').map(Number);
  }
}
