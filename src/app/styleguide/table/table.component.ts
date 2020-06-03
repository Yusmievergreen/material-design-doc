import { Component, OnInit } from '@angular/core'
import { StyleguideService } from '../styleguide.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'location']
  dataSource = []

  constructor(private styleguideService: StyleguideService) {
    this.styleguideService.getEmployeeList().subscribe((data) => {
      this.dataSource = data.map((item) => ({
        ...item,
        name: `${item.name.first} ${item.name.last}`,
        location:
          item.location.country == 'France'
            ? `${item.location.city} ${item.location.state}`
            : `${item.location.city}, ${item.location.state}, ${item.location.country}`
      }))

      console.log(this.displayedColumns, this.dataSource)
    })
  }

  ngOnInit() {}
}
