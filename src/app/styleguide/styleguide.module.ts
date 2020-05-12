import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StyleguideRoutingModule } from './styleguide-routing.module'
import { StyleguideComponent } from './styleguide.component'
import { CoreModule } from '../core/core.module'

@NgModule({
  declarations: [StyleguideComponent],
  imports: [CommonModule, StyleguideRoutingModule, CoreModule]
})
export class StyleguideModule {}
