import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tipo_inmueble } from './tipo_inmueble';

 
@Injectable()
 
export class TipoInmuebleService {
  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private tiposInmuebleUrl = 'http://rst-back.com/api/tipos_inmueble';
  getTiposInmueble(): Promise<Tipo_inmueble[]> {
    return this.http.get(this.tiposInmuebleUrl)
      .toPromise()
      .then(response => response.json().data as Tipo_inmueble[])
      .catch(this.handleError);
  }
  getTipoInmueble(id: number): Promise<Tipo_inmueble> {
    const url = `${this.tiposInmuebleUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Tipo_inmueble)
      .catch(this.handleError);
  }
  createTipoInmueble(tipo_inmueble: Tipo_inmueble): Promise<Tipo_inmueble> {
    return this.http
      .post(this.tiposInmuebleUrl, JSON.stringify(tipo_inmueble), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Tipo_inmueble)
      .catch(this.handleError);
  }
  updateTipoInmueble(tipo_inmueble: Tipo_inmueble): Promise<Tipo_inmueble> {
    const url = `${this.tiposInmuebleUrl}/${tipo_inmueble.id}`;
    return this.http
      .put(url, JSON.stringify(tipo_inmueble), { headers: this.headers })
      .toPromise()
      .then(() => tipo_inmueble)
      .catch(this.handleError);
  }
  deleteTipoInmueble(tipo_inmueble: Tipo_inmueble): Promise<void> {
    const url = `${this.tiposInmuebleUrl}/${tipo_inmueble.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ocurrio un error:', error);
    return Promise.reject(error.message || error);
  }
}