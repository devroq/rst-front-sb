import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { TipoInmuebleRoutingModule } from './tipo_inmueble-routing.module';
import { TipoInmuebleListComponent } from './list/tipo_inmueble_list.component';
import { TipoInmuebleFormComponent } from './form/tipo_inmueble_form.component';

@NgModule({
  imports: [
    CommonModule,
    TipoInmuebleRoutingModule,
    PageHeaderModule
  ],
  declarations: [TipoInmuebleListComponent,TipoInmuebleFormComponent]
})
export class TipoInmuebleModule {}