import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  links = ['link']
  stateForm: FormGroup = this.fb.group({
    searchFor: ''
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
