import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoInmuebleRoutingModule } from './tipo_inmueble-routing.module';
import { TipoInmuebleComponent } from './tipo_inmueble.component';

@NgModule({
  imports: [
    CommonModule,
    TipoInmuebleModule
  ],
  declarations: [TipoInmuebleComponent]
})
export class TipoInmuebleModule { }