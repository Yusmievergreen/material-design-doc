import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'

import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'

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

  /** Error when invalid control is dirty, touched, or submitted. */
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }

  /**Select with a custom ErrorStateMatcher */
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')])

  matcher = new ErrorStateMatcher()

  /* Expansion panel as accordion*/
  setStep(index: number) {
    this.step = index
  }

  nextStep() {
    this.step++
  }

  prevStep() {
    this.step--
  }

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

  /**Slider with custom thumb label formatting.*/
  formatLabel(value: number | null) {
    if (!value) {
      return 0
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k'
    }

    return value
  }

  /**Dynamic grid list */
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ]

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    })
  }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterGroup(value))
    )
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map((group) => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter((group) => group.names.length > 0)
    }

    return this.stateGroups
  }
}
