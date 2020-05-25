import { Component, OnInit } from '@angular/core'
import { ErrorStateMatcher } from '@angular/material/core'
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')])
  matcher = new ErrorStateMatcher()

  constructor() {}

  ngOnInit() {}

  /*Error when invalid control is dirty, touched, or submitted.*/
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}
