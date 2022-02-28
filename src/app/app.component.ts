import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dropdown-Calendar';
  public calendarForm:any;
  public dates: number[]=[];
  public months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public years:any[]=[]
  public startYear=1950;
  public endYear=2022;
  public j=0;

  constructor(public formBuilder: FormBuilder){
    this.calendar();
    for(let i=1;i<=31;i++){
      this.dates[i]=i;
    }
    for(let i=this.startYear;i<=this.endYear;i++){
      this.years[this.j++]=i;
    }
  }

  ngOnInIt():void{
     this.calendar();
     console.log("ngOnInIt")
    // for(let i=1;i<=31;i++){
    //   this.dates[i]=i;
    // }
    // for(let i=1950;i<=2022;i++){
    //   //let j=1;
    //   this.years[++this.j]=i;
      
    // }
   // while(this.startYear<=this.endYear)
  }
  calendar(){
    console.log("calender");
    this.calendarForm=this.formBuilder.group({
      dat: new FormControl("",Validators.required),
      month: new FormControl("",Validators.required),
      year: new FormControl("",Validators.required),
    })
  }
  values(){
    // for(let i=1;i<=31;i++){
    //   this.dates[i]=i;
    // }
    // for(let i=1950;i<=2022;i++){
    //   this.years[i]=i;
    // }
  }

}
