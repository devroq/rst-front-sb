import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Tipo_inmueble } from './tipo_inmueble';
import { TipoInmuebleService } from './tipo_inmueble.service';
import { routerTransition } from '../../router.animations';
 
@Component({
  selector: 'tipo_inmueble',
  templateUrl: './tipo_inmueble.component.html',
  styleUrls: ['./tipo_inmueble.component.css'],
  animations: [routerTransition()],
  providers: [TipoInmuebleService],
})
export class TipoInmuebleComponent implements OnInit {
  tipo_inmueble: Tipo_inmueble;
  constructor(
    private tipoInmuebleService: TipoInmuebleService,
    private route: ActivatedRoute,
    private location: Location
  ) {     
  }
  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.tipoInmuebleService.getTipoInmueble(+params['id']))
      .subscribe(tipo_inmueble => this.tipo_inmueble = tipo_inmueble);
  }
  updateTipoInmueble(): void {
    this.tipoInmuebleService.updateTipoInmueble(this.tipo_inmueble);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}