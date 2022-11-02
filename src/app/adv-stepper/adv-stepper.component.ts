import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adv-stepper',
  templateUrl: './adv-stepper.component.html',
  styleUrls: ['./adv-stepper.component.scss']
})
export class AdvStepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() count = 0
  @Output() change = new EventEmitter()

  increment(): void {
    this.count++
    this.change.emit(this.count)
  }

  decrement(): void {
    this.count--
    this.change.emit(this.count)
  }
}
