import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { TipoInmuebleRoutingModule } from './tipo_inmueble-routing.module';
import { TipoInmuebleComponent } from './tipo_inmueble.component';

@NgModule({
  imports: [
    CommonModule,
    TipoInmuebleRoutingModule,
    PageHeaderModule
  ],
  declarations: [TipoInmuebleComponent]
})
export class TipoInmuebleModule { 
  
}