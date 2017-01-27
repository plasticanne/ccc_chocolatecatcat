import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cat_schoolComponent } from './app.component';

const routes: Routes = [
    { path: 'cat_school', component: cat_schoolComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {};
