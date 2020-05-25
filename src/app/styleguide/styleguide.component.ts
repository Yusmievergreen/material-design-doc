import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MatSnackBar, PageEvent, Sort } from '@angular/material'
import { MatDialog } from '@angular/material'
import { DialogComponent } from './dialog/dialog.component'
import { Tile, Section, Dessert, PeriodicElement, ELEMENT_DATA } from './styleguide.interfaces'

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  /*list with sections */
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ]
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ]

  /**Dynamic grid list */
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ]

  /**Stepper */
  isLinear = false
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  /**Progress spinner */
  color = 'primary'
  mode = 'indeterminate'
  value = 50
  bufferValue = 75

  /* MatPaginator Inputs*/
  length = 100
  pageSize = 10
  pageSizeOptions: number[] = [5, 10, 25, 100]

  /*MatPaginator Output*/
  pageEvent: PageEvent

  /**Sorting */
  desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 }
  ]

  sortedData: Dessert[]

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public dialog: MatDialog) {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    })
    this.sortedData = this.desserts.slice()
  }

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent)

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }

  /*Slider with custom thumb label formatting.*/
  formatLabel(value: number | null) {
    if (!value) {
      return 0
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k'
    }

    return value
  }
  /** Snackbar */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    })
  }
  /**Paginator */
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((str) => +str)
  }
  /**Sorting */
  sortData(sort: Sort) {
    const data = this.desserts.slice()
    if (!sort.active || sort.direction === '') {
      this.sortedData = data
      return
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc'
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc)
        case 'calories':
          return compare(a.calories, b.calories, isAsc)
        case 'fat':
          return compare(a.fat, b.fat, isAsc)
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc)
        case 'protein':
          return compare(a.protein, b.protein, isAsc)
        default:
          return 0
      }
    })
  }

  /**Table */
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  dataSource = ELEMENT_DATA
}

/**Sorting */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
}
