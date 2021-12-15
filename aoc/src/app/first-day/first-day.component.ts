import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.component.html',
  styleUrls: ['./first-day.component.scss'],
})
export class FirstDayComponent implements OnInit {

  numbers: number[];
  data: string;
  url = './assets/input1.txt';
  solution1: number;
  solution2: number;

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    private router: Router
  ) {
    http
      .get(this.url, { responseType: 'text' })
      .toPromise()
      .then((res) => {
        this.data = res;
      });
  }

  ngOnInit() {}

  back()
  {
    this.router.navigate([ '/' ]);
  }

  onClick1(): void {
    this.split();

    this.solution1 = 0;
    let prevNumber;
    let currentNumber;

    for (let index = 0; index < this.numbers.length - 1; index++) {
      if (index == 0) {
        prevNumber = 0;
      } else {
        currentNumber = this.numbers[index];

        if (prevNumber < currentNumber) {
          this.solution1++;
        }
        prevNumber = currentNumber;
      }
    }

    this.presentToast(this.solution1);
  }

  onClick2(): void {
    this.split();
    let firstGroup;
    let secondGroup;
    this.solution2 = 0;

    for (let i = 0; i < this.numbers.length - 3; i++) {
      if (firstGroup === 0) {
        firstGroup =
          this.numbers[i] + this.numbers[i + 1] + this.numbers[i + 2];
        secondGroup =
          this.numbers[i + 1] + this.numbers[i + 2] + this.numbers[i + 3];
      } else {
        secondGroup =
          this.numbers[i] + this.numbers[i + 1] + this.numbers[i + 2];
      }

      if (firstGroup < secondGroup && firstGroup != secondGroup) {
        this.solution2++;
      }

      firstGroup = secondGroup;
    }

    this.presentToast(this.solution2);
  }

  async presentToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg.toString(),
      duration: 2000,
    });
    toast.present();
  }

  split() {
    this.numbers = this.data.split('\r\n').map(Number);
  }
}
