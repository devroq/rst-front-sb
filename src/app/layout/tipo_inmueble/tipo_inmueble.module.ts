import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { TipoInmuebleRoutingModule } from './tipo_inmueble-routing.module';
import { TipoInmuebleListComponent } from './list/tipo_inmueble_list.component';

@NgModule({
  imports: [
    CommonModule,
    TipoInmuebleRoutingModule,
    PageHeaderModule
  ],
  declarations: [TipoInmuebleListComponent]
})
export class TipoInmuebleModule {}