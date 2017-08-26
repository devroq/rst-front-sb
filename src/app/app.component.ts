import { Component } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    /*    private apiUrl = 'http://rst-back.com/api/tipos_inmueble';
    data: any = {};
    constructor(private http: Http){
            console.log("Hello user!!!");
            this.getTiposInmueble();
    } 
    getData(){
        return this.http.get(this.apiUrl)
            .map((res:Response) => res.json())
    }
    getTiposInmueble(){
        this.getData().subscribe(data => {
            console.log(data);
            this.data = data             
            })
    } */
}
