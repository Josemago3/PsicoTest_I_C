import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla-test',
  templateUrl: './plantilla-test.component.html',
  styleUrls: ['./plantilla-test.component.css']
})
export class PlantillaTestComponent implements OnInit {

  @Input() label!:string
  @Input() btn1!:string
  @Input() btn2!:string
  @Input() btn3!:string

  constructor() { }

  ngOnInit(): void {
  }

}
