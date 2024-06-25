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
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  {path: 'professionals', component: ProfessionalsComponent},
  {path: 'list-coaches', component: ListCoachesComponent},
  {path: 'list-nutritionists', component: ListNutritionistsComponent},
  {path: 'detail-coach/:id', component: DetailCoachComponent},
  {path: 'detail-nutritionist/:id', component: DetailNutritionistComponent},
  {path: 'subscriptions', component: SuscriptionsComponent},
  {path: 'subscriptions/payments', component: PaymentsComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'testimonials/write', component: TestimonialsWriteComponent},
  {path: 'food-selection', component: FoodSelectionComponent},
  {path: 'activity-level', component: ActivityLevelComponent},
  {path: 'goal', component: HomeGoalComponent},
  {path: 'goal/next', component: HomeGoalNextComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'profile/programs', component: ProgramsComponent},
  {path: 'profile/programs/training', component: ProgramsTrainingComponent},
  {path: 'profile/premium', component: PremiumComponent},
  {path: 'profile/premium/process', component: ProcessComponent},
  {path: 'profile/premium/process/analysis', component: AnalysisComponent},
  {path: 'profile/premium/exclusive-content', component: ExclusiveContentComponent},
  {path: 'profile/premium/challenge', component: ChallengeComponent},
  {path: 'help-center', component: FaqComponent},
  {path: 'complains-doubts', component: ComplainsDoubtsComponent},
  {path: 'strength-training-challenge', component: StrengthTrainingChallengeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
