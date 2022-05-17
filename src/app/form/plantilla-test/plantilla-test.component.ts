import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plantilla-test',
  templateUrl: './plantilla-test.component.html',
  styleUrls: ['./plantilla-test.component.css']
})
export class PlantillaTestComponent{

  @Input() label!:string
  @Input() campo!:string
  @Input() resp1!:string
  @Input() resp2!:string
  @Input() resp3!:string

  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  devolver(value:number) : void {
    //console.log("valor -> ", value)
    this.newItemEvent.emit(value);
  }
}
