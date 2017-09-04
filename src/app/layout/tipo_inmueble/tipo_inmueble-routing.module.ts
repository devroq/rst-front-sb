import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoInmuebleComponent } from './tipo_inmueble.component';

const routes: Routes = [
    {path:'',component:TipoInmuebleComponent},
    {path:'create',component:TipoInmuebleComponent},
    {path:'edit/:id',component:TipoInmuebleComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoInmuebleRoutingModule{}
