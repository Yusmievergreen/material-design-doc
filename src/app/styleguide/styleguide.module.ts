import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StyleguideRoutingModule } from './styleguide-routing.module'
import { StyleguideComponent } from './styleguide.component'
import { CoreModule } from '../core/core.module'
import { DialogComponent } from './dialog/dialog.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { FormFieldComponent } from './form-field/form-field.component'
import { InputsComponent } from './inputs/inputs.component'
import { RadioButtonComponent } from './radio-button/radio-button.component'
import { SelectComponent } from './select/select.component'
import { MenuComponent } from './menu/menu.component'
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component'
import { ListsComponent } from './lists/lists.component'
import { SortingComponent } from './sorting/sorting.component'
import { TableComponent } from './table/table.component'
import { DatepickerComponent } from './datepicker/datepicker.component'
import { SliderComponent } from './slider/slider.component'
import { SlideComponent } from './slide/slide.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { CardComponent } from './card/card.component'
import { GridComponent } from './grid/grid.component'
import { ButtonsComponent } from './buttons/buttons.component'
import { ButtonToggleComponent } from './button-toggle/button-toggle.component'
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component'
import { SnackBarComponent } from './snack-bar/snack-bar.component'
import { PaginatorComponent } from './paginator/paginator.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { ChipsComponent } from './chips/chips.component'
import { BadgeComponent } from './badge/badge.component';
import { StepperComponent } from './stepper/stepper.component'

@NgModule({
  declarations: [
    StyleguideComponent,
    DialogComponent,
    AutocompleteComponent,
    CheckboxComponent,
    FormFieldComponent,
    InputsComponent,
    RadioButtonComponent,
    SelectComponent,
    MenuComponent,
    ExpansionPanelComponent,
    ListsComponent,
    SortingComponent,
    TableComponent,
    DatepickerComponent,
    SliderComponent,
    SlideComponent,
    ToolbarComponent,
    CardComponent,
    GridComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    ProgressSpinnerComponent,
    SnackBarComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ChipsComponent,
    BadgeComponent,
    StepperComponent
  ],
  imports: [CommonModule, StyleguideRoutingModule, CoreModule],
  entryComponents: [DialogComponent]
})
export class StyleguideModule {}
