import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  links = [{ name: 'Styleguide', link: '/styleguide' }]
  tiles = [
    { text: 'One', color: 'lightblue' },
    { text: 'Two', color: 'lightgreen' },
    { text: 'Three', color: 'lightpink' },
    { text: 'Four', color: '#DDBDF1' }
  ]
  stateForm: FormGroup = this.fb.group({
    searchFor: ''
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
