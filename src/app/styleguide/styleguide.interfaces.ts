//autocomplete with groups
export interface StateGroup {
  letter: string
  names: string[]
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
