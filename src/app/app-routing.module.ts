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
import {FoodSelectionComponent} from "./gympal/pages/food-selection/food-selection.component";
import {ActivityLevelComponent} from "./gympal/pages/activity-level/activity-level.component";
import {HomeGoalComponent} from "./gympal/pages/home-goal/home-goal.component";
import {TestimonialsWriteComponent} from "./gympal/pages/testimonials-write/testimonials-write.component";
import {HomeGoalNextComponent} from "./gympal/pages/home-goal-next/home-goal-next.component";
import {PaymentsComponent} from "./gympal/pages/payments/payments.component";
import {ProgramsComponent} from "./gympal/pages/programs/programs.component";
import {ProgramsTrainingComponent} from "./gympal/pages/programs-training/programs-training.component";
import {FaqComponent} from "./gympal/pages/faq/faq.component";
import {ComplainsDoubtsComponent} from "./gympal/pages/complains-doubts/complains-doubts.component";
import {
  StrengthTrainingChallengeComponent
} from "./gympal/pages/strength-training-challenge/strength-training-challenge.component";
import {PremiumComponent} from "./gympal/pages/premium/premium.component";
import {ChallengeComponent} from "./gympal/pages/challenge/challenge.component";
import {ExclusiveContentComponent} from "./gympal/pages/exclusive-content/exclusive-content.component";
import {ProcessComponent} from "./gympal/pages/process/process.component";
import {AnalysisComponent} from "./gympal/pages/analysis/analysis.component";
import {ContactFormComponent} from "./gympal/pages/contact-form/contact-form.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {authenticationGuard} from "./iam/services/authentication.guard";
const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authenticationGuard] },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  //{ path: 'protected', component: ProfessionalsComponent, canActivate: [authenticationGuard] },
  //{path: '**', redirectTo: 'sign-in'},
  {path: 'professionals', component: ProfessionalsComponent, canActivate: [authenticationGuard] },
  {path: 'list-coaches', component: ListCoachesComponent, canActivate: [authenticationGuard] },
  {path: 'list-nutritionists', component: ListNutritionistsComponent, canActivate: [authenticationGuard] },
  {path: 'detail-coach/:id', component: DetailCoachComponent, canActivate: [authenticationGuard] },
  {path: 'detail-nutritionist/:id', component: DetailNutritionistComponent, canActivate: [authenticationGuard] },
  {path: 'subscriptions', component: SuscriptionsComponent, canActivate: [authenticationGuard] },
  {path: 'subscriptions/payments', component: PaymentsComponent, canActivate: [authenticationGuard] },
  {path: 'community', component: CommunityComponent, canActivate: [authenticationGuard] },
  {path: 'testimonials', component: TestimonialsComponent, canActivate: [authenticationGuard] },
  {path: 'testimonials/write', component: TestimonialsWriteComponent, canActivate: [authenticationGuard] },
  {path: 'food-selection', component: FoodSelectionComponent, canActivate: [authenticationGuard] },
  {path: 'activity-level', component: ActivityLevelComponent, canActivate: [authenticationGuard] },
  {path: 'goal', component: HomeGoalComponent, canActivate: [authenticationGuard] },
  {path: 'goal/next', component: HomeGoalNextComponent, canActivate: [authenticationGuard] },
  {path: 'profile', component: ProfileComponent, canActivate: [authenticationGuard] },
  {path: 'contact-form', component: ContactFormComponent, canActivate: [authenticationGuard] },
  {path: 'profile/programs', component: ProgramsComponent, canActivate: [authenticationGuard] },
  {path: 'profile/programs/training', component: ProgramsTrainingComponent, canActivate: [authenticationGuard] },
  {path: 'profile/premium', component: PremiumComponent, canActivate: [authenticationGuard] },
  {path: 'profile/premium/process', component: ProcessComponent, canActivate: [authenticationGuard] },
  {path: 'profile/premium/process/analysis', component: AnalysisComponent, canActivate: [authenticationGuard] },
  {path: 'profile/premium/exclusive-content', component: ExclusiveContentComponent, canActivate: [authenticationGuard] },
  {path: 'profile/premium/challenge', component: ChallengeComponent, canActivate: [authenticationGuard] },
  {path: 'help-center', component: FaqComponent, canActivate: [authenticationGuard] },
  {path: 'complains-doubts', component: ComplainsDoubtsComponent, canActivate: [authenticationGuard] },
  {path: 'strength-training-challenge', component: StrengthTrainingChallengeComponent, canActivate: [authenticationGuard] },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
