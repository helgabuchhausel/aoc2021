
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-third-day',
  templateUrl: './third-day.component.html',
  styleUrls: ['./third-day.component.scss'],
})
export class ThirdDayComponent implements OnInit {
  bits: string[];
  data: string;
  url = './assets/input3.txt';
  solution1: number;
  solution2: number;


  constructor(
    private http: HttpClient,
    private fileService: FileService,
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

  back() {
    this.router.navigate(['/']);
  }


  async presentToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg.toString(),
      duration: 2000,
    });
    toast.present();
  }

  onClick1() {
    this.solution1 = 0;

    this.bits = this.fileService.split(this.data);

    let binaryGamma = '';
    let binaryEpsilon = '';

    for (let i = 0; i < this.bits[0].length; i++) {
      let ones = 0;
      let zeros = 0;
      for (const bit of this.bits)  {
        const currentNumber = parseInt(bit[i], 10);
        if (currentNumber === 1) {
          ones++;
        } else {
          zeros++;
        }
      }

      if (ones > zeros) {
        binaryGamma += '1';
        binaryEpsilon += '0';
      }
      else {
        binaryGamma += '0';
        binaryEpsilon += '1';
      }
    }

    this.solution1 = parseInt(binaryEpsilon, 2) * parseInt(binaryGamma, 2); // in dec
    this.presentToast(this.solution1);
  }

  onClick2() {}

}
