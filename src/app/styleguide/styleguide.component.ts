import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'
import { MatSnackBar, PageEvent, Sort } from '@angular/material'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'
import { MatDialog } from '@angular/material'
import { DialogComponent } from './dialog/dialog.component'

export interface StateGroup {
  letter: string
  names: string[]
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase()

  return opt.filter((item) => item.toLowerCase().indexOf(filterValue) === 0)
}

export interface Tile {
  color: string
  cols: number
  rows: number
  text: string
}

export interface Section {
  name: string
  updated: Date
}

export interface Dessert {
  calories: number
  carbs: number
  fat: number
  name: string
  protein: number
}

export interface PeriodicElement {
  name: string
  position: number
  weight: number
  symbol: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
]

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  checked = false
  indeterminate = false
  labelPosition = 'after'
  disabled = false
  options: FormGroup
  favoriteSeason: string
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn']
  step = 0

  /**Select with a custom ErrorStateMatcher */
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')])
  matcher = new ErrorStateMatcher()

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
  /**Autocomplete with options groups */
  stateForm: FormGroup = this.fb.group({
    stateGroup: ''
  })

  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut']
    },
    {
      letter: 'D',
      names: ['Delaware']
    },
    {
      letter: 'F',
      names: ['Florida']
    },
    {
      letter: 'G',
      names: ['Georgia']
    },
    {
      letter: 'H',
      names: ['Hawaii']
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky']
    },
    {
      letter: 'L',
      names: ['Louisiana']
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana'
      ]
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota'
      ]
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon']
    },
    {
      letter: 'P',
      names: ['Pennsylvania']
    },
    {
      letter: 'R',
      names: ['Rhode Island']
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota']
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas']
    },
    {
      letter: 'U',
      names: ['Utah']
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia']
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  ]

  stateGroupOptions: Observable<StateGroup[]>

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
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    })
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    })
    this.sortedData = this.desserts.slice()
  }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterGroup(value))
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent)

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map((group) => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter((group) => group.names.length > 0)
    }

    return this.stateGroups
  }

  /*Error when invalid control is dirty, touched, or submitted.*/
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }

  /*Expansion panel as accordion*/
  setStep(index: number) {
    this.step = index
  }

  nextStep() {
    this.step++
  }

  prevStep() {
    this.step--
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
