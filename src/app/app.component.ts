import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dropdown-Calendar';
  public calendarForm: any;
  public dates: number[] = [];
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public years: any[] = []
  public startYear!: number;
  public endYear!: number;
  public j = 0;

  constructor(public formBuilder: FormBuilder) {
    //get year by Date Class
    var currentTime = new Date()
    this.startYear = currentTime.getFullYear() - 100;
    this.endYear = currentTime.getFullYear();
    for (var i = 1; i <= 31; i++) {
      this.dates[this.j++] = i;
    }
    this.j = 0;
    for (let i = this.startYear; i <= this.endYear; i++) {
      this.years[this.j++] = i;
    }
    //this.calendar();
  }


  ngOnInit(): void {
    this.calendar();
    console.log("ngOnInIt");

  }
  calendar() {
    console.log("calender");

    this.calendarForm = this.formBuilder.group({
      date: new FormControl("", Validators.required),
      month: new FormControl("", Validators.required),
      year: new FormControl("", Validators.required),
    }, { validator: CustomValidators("month") }
    )
  }
  values() {
    // for(let i=1;i<=31;i++){
    //   this.dates[i]=i;
    // }
    // for(let i=1950;i<=2022;i++){
    //   this.years[i]=i;
    // }
  }

}
