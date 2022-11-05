import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, AfterViewInit {
  hourHandStyle: any;
  minuteHandStyle: any;
  secondHandStyle: any;


  constructor() { }
  ngAfterViewInit(): void {
    setInterval(() => {
      const d = new Date(); //object of date()
      const hr = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const hr_rotation = 30 * hr + min / 2; //converting current time
      const min_rotation = 6 * min;
      const sec_rotation = 6 * sec;

      this.hourHandStyle = { transform: `rotate(${hr_rotation}deg)` };
      this.minuteHandStyle = { transform: `rotate(${min_rotation}deg)` };
      this.secondHandStyle = { transform: `rotate(${sec_rotation}deg)` };
    }, 1000);
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }


}
