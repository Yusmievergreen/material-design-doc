import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  color = 'primary'
  mode = 'indeterminate'
  value = 50
  bufferValue = 75

  constructor() {}

  ngOnInit() {}
}
