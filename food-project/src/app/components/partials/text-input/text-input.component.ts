import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() control!: AbstractControl;
  @Input() showErrors: boolean = true;
  @Input() label!: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
