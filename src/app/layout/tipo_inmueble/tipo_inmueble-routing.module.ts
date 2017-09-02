import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoInmuebleListComponent } from './tipo_inmueble_list.component';

const routes: Routes = [
    {path:'',component:TipoInmuebleListComponent}
    {path:'detail/:id',component:TipoInmuebleDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoInmuebleRoutingModule { }
