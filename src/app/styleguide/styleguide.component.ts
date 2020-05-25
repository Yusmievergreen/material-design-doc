import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar, PageEvent } from '@angular/material'
import { MatDialog } from '@angular/material'
import { DialogComponent } from './dialog/dialog.component'
import { Tile } from './styleguide.interfaces'

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
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

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public dialog: MatDialog) {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    })
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
}
