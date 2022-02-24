import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dropdown-Calendar';
  public CalendarForm:any;
  public date: Array<number> = [];
  public month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public year:any[]=[]

  constructor(public formBuilder: FormBuilder){}

  ngOnInIt(){
    this.calendar();
    for(let i=1;i<=31;i++){
      this.date[i]=i;
    }
    for(let i=1950;i<=2022;i++){
      this.year[i]=i;
    }
  }
  calendar(){
    this.CalendarForm=this.formBuilder.group({
      date:new FormControl("",Validators.required),
      moth:new FormControl("",Validators.required),
      year:new FormControl("",Validators.required)
    })
  }
  values(){
    for(let i=1;i<=31;i++){
      this.date[i]=i;
    }
    for(let i=1950;i<=2022;i++){
      this.year[i]=i;
    }
  }

}
