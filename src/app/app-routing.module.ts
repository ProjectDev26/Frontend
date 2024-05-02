import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ProfessionalsComponent} from "./public/pages/professionals/professionals/professionals.component";
import {ListCoachesComponent} from "./public/pages/list-coaches/list-coaches.component";
import {ListNutritionistsComponent} from "./public/pages/list-nutritionists/list-nutritionists.component";
import {DetailCoachComponent} from "./public/pages/detail-coach/detail-coach.component";
import {SuscriptionsComponent} from "./public/pages/suscriptions/suscriptions.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'professionals', component: ProfessionalsComponent},
  {path: 'list-coaches', component: ListCoachesComponent},
  {path: 'list-nutritionists', component: ListNutritionistsComponent},
  {path: 'detail-coach/:id', component: DetailCoachComponent},
  {path: 'suscriptions', component: SuscriptionsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
