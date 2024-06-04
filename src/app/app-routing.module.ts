import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ProfessionalsComponent} from "./gympal/pages/professionals/professionals/professionals.component";
import {ListCoachesComponent} from "./gympal/pages/list-coaches/list-coaches.component";
import {ListNutritionistsComponent} from "./gympal/pages/list-nutritionists/list-nutritionists.component";
import {DetailCoachComponent} from "./gympal/pages/detail-coach/detail-coach.component";
import {SuscriptionsComponent} from "./gympal/pages/suscriptions/suscriptions.component";
import {ProfileComponent} from "./gympal/pages/profile/profile.component";
import {DetailNutritionistComponent} from "./gympal/pages/detail-nutritionist/detail-nutritionist.component";
import {CommunityComponent} from "./gympal/pages/community/community.component";
import {TestimonialsComponent} from "./gympal/pages/testimonials/testimonials.component";
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'professionals', component: ProfessionalsComponent},
  {path: 'list-coaches', component: ListCoachesComponent},
  {path: 'list-nutritionists', component: ListNutritionistsComponent},
  {path: 'detail-coach/:id', component: DetailCoachComponent},
  {path: 'detail-nutritionist/:id', component: DetailNutritionistComponent},
  {path: 'subscriptions', component: SuscriptionsComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
