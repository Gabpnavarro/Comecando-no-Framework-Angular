import { NgModule } from '@angular/core';

// Sempre q a gente for trabalhar com o angular tem q puxar o @angular/core, o modulo armazena as rotas.

import { RouterModule, Routes } from '@angular/router';

// Routes é um tipo
// RouterModule é uma classe


import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},
  //portfolio
  //portfolio/1
  //portfolio/1/abc
  {path:'portfolio', component: CardComponent, children:[
    {path:':id', component: CardComponent},
    {path:':id/:token', component: CardComponent},
  ]},
  {path:'**', redirectTo:''}
];

// Routes é um array

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// RouterModule ele quem gerencia as rotas, o forRoot serve para dizer se ele é principal ou é filho, ele lê as
// constantes que vai declarar, nesse caso é o routes.

export class AppRoutingModule { }
