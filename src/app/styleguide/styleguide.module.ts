import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StyleguideRoutingModule } from './styleguide-routing.module'
import { StyleguideComponent } from './styleguide.component'
import { CoreModule } from '../core/core.module'
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [StyleguideComponent, DialogComponent],
  imports: [CommonModule, StyleguideRoutingModule, CoreModule],
  entryComponents: [DialogComponent]
})
export class StyleguideModule {}
