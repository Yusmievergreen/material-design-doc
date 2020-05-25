import { Component, OnInit } from '@angular/core'
import { ELEMENT_DATA, PeriodicElement } from '../styleguide.interfaces'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  dataSource = ELEMENT_DATA
}
