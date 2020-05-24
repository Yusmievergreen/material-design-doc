import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StyleguideRoutingModule } from './styleguide-routing.module'
import { StyleguideComponent } from './styleguide.component'
import { CoreModule } from '../core/core.module'
import { DialogComponent } from './dialog/dialog.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { FormFieldComponent } from './form-field/form-field.component'

@NgModule({
  declarations: [
    StyleguideComponent,
    DialogComponent,
    AutocompleteComponent,
    CheckboxComponent,
    FormFieldComponent
  ],
  imports: [CommonModule, StyleguideRoutingModule, CoreModule],
  entryComponents: [DialogComponent]
})
export class StyleguideModule {}
