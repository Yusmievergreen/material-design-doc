import { Component, OnInit } from '@angular/core'

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  constructor(private fb: FormBuilder) {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    })
  }

  ngOnInit() {}
}
