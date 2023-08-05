import { Component } from '@angular/core';
import { IBoxData } from 'src/app/interfaces/box.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public childInformation = 'waiting for information...';
  public boxData: IBoxData = {
    title:'My first component',
    description: "this is my first angular app",
    color:"red"
  }

  changeBoxDataTitle(){
    this.boxData = { ...this.boxData, title:'Title changed',color:'blue' };
    
  }

  receivedInformation(event:string){
      this.childInformation = event
  }
}
