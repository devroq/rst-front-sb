import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Tipo_inmueble } from '../tipo_inmueble';
import { TipoInmuebleService } from '../tipo_inmueble.service';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'tipo_inmueble_form',
    templateUrl: './tipo_inmueble_form.component.html',
    animations: [routerTransition()],
    providers: [TipoInmuebleService],
})
export class TipoInmuebleFormComponent implements OnInit {
  tipo_inmueble: Tipo_inmueble;
  tipos_inmueble:Tipo_inmueble[]; 
  constructor(
    private tipoInmuebleService: TipoInmuebleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.tipoInmuebleService.getTiposInmueble().then(rs => this.tipos_inmueble = rs);
  }
  updateTipoInmueble(): void {
    this.tipoInmuebleService.updateTipoInmueble(this.tipo_inmueble);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}