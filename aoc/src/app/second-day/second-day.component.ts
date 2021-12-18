import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-second-day',
  templateUrl: './second-day.component.html',
  styleUrls: ['./second-day.component.scss'],
})
export class SecondDayComponent implements OnInit {

  instructions: string[];
  data: string;
  url = './assets/input2.txt';
  solution1: number;
  solution2: number;

  constructor( private http: HttpClient, public toastController: ToastController,
    private router: Router, private fileService: FileService) {
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

  async presentToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg.toString(),
      duration: 2000,
    });
    toast.present();
  }


  onClick1(){
    this.solution1 = 0;
    let horizontal = 0;
    let depth = 0;
    this.instructions =  this.fileService.split(this.data);

    this.instructions.forEach(e => {
      const temp : number = parseInt(e.split(' ')[1], 10);
      if (e.match('forward ')) {
        horizontal += temp;
      }
      if (e.match('up ')) {
        depth -= temp;
      }
      if (e.match('down ')) {
        depth += temp;
      }
    });

    this.solution1 = depth*horizontal;
    this.presentToast(this.solution1);
  }

  onClick2(){
    this.solution2 = 0;
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    this.instructions =  this.fileService.split(this.data);

    this.instructions.forEach(e => {
      const temp : number = parseInt(e.split(' ')[1], 10);
      if (e.match('forward ')) {
        horizontal += temp;
        depth = depth + (aim * temp);
      }
      if (e.match('up ')) {
        aim -= temp;
      }
      if (e.match('down ')) {
        aim += temp;
      }
    });

    this.solution2 = depth*horizontal;

    this.presentToast(this.solution2);
  }

}
