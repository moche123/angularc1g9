import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,Output,EventEmitter } from '@angular/core';
import { IBoxData } from 'src/app/interfaces/box.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit,OnChanges,OnDestroy {
  private interval: number = 0;

  @Input('data') data: IBoxData = {
    title:'',
    description:'',
    color :''
  }; 

  @Output() sendInfoFromChild: EventEmitter<string> = new EventEmitter;

  constructor(){
    console.log('Constructor');
  }

  ngOnInit(){
    console.log('Init');
    this.interval = window.setInterval( () => {
      console.log('REPEAT')
    },1000)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('Changes');
    console.log(changes);

  }
  
  sendToParent(){
    this.sendInfoFromChild.emit('Information from child')
  }


  ngOnDestroy(){
    console.log('Destroy');

    clearInterval(this.interval)

  }
}
