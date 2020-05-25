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
import { SelectComponent } from './select/select.component';
import { MenuComponent } from './menu/menu.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ListsComponent } from './lists/lists.component';
import { SortingComponent } from './sorting/sorting.component';
import { TableComponent } from './table/table.component'

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
    TableComponent
  ],
  imports: [CommonModule, StyleguideRoutingModule, CoreModule],
  entryComponents: [DialogComponent]
})
export class StyleguideModule {}
