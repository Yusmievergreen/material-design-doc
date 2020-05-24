import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-radio-buttons-ng-model',
  templateUrl: './radio-buttons-ng-model.component.html',
  styleUrls: ['./radio-buttons-ng-model.component.scss']
})
export class RadioButtonsNgModelComponent implements OnInit {
  favoriteSeason: string
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn']

  constructor() {}

  ngOnInit() {}
}
