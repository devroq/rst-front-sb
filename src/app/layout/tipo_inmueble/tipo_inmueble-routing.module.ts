import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoInmuebleListComponent } from './list/tipo_inmueble_list.component';
import { TipoInmuebleFormComponent } from './form/tipo_inmueble_form.component';

const routes: Routes = [
    {path:'',component:TipoInmuebleListComponent},
    {path:'add',component:TipoInmuebleFormComponent},
    {path:'edit/:id',component:TipoInmuebleFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoInmuebleRoutingModule{}
