import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatButtonModule} from "@angular/material/button";
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {GymsApiService} from "./gympal/services/gyms-api.service";
import {MatIcon} from "@angular/material/icon";
import {ProfessionalsComponent} from "./gympal/pages/professionals/professionals/professionals.component";
import {ListCoachesComponent} from "./gympal/pages/list-coaches/list-coaches.component";
import {ListNutritionistsComponent} from "./gympal/pages/list-nutritionists/list-nutritionists.component";
import {DetailCoachComponent} from "./gympal/pages/detail-coach/detail-coach.component";
import {SuscriptionsComponent} from "./gympal/pages/suscriptions/suscriptions.component";
import { ProfileComponent } from './gympal/pages/profile/profile.component';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { HomeGoalNextComponent } from './gympal/pages/home-goal-next/home-goal-next.component';
import { PaymentsComponent } from './gympal/pages/payments/payments.component';
import { ProgramsComponent } from './gympal/pages/programs/programs.component';
import { ProgramsTrainingComponent } from './gympal/pages/programs-training/programs-training.component';
import { FaqComponent } from './gympal/pages/faq/faq.component';
import { ComplainsDoubtsComponent } from './gympal/pages/complains-doubts/complains-doubts.component';
import { StrengthTrainingChallengeComponent } from './gympal/pages/strength-training-challenge/strength-training-challenge.component';
import { PremiumComponent } from './gympal/pages/premium/premium.component';
import { ChallengeComponent } from './gympal/pages/challenge/challenge.component';
import { ExclusiveContentComponent } from './gympal/pages/exclusive-content/exclusive-content.component';
import { ProcessComponent } from './gympal/pages/process/process.component';
import { AnalysisComponent } from './gympal/pages/analysis/analysis.component';
import { ContactFormComponent } from './gympal/pages/contact-form/contact-form.component';
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {authenticationInterceptor} from "./iam/services/authentication.interceptor";
import {ProfileApiService} from "./gympal/services/profile-api.service";
import {TestimonialsApiService} from "./gympal/services/testimonials-api.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfessionalsComponent,
    FooterContentComponent,
    ListCoachesComponent,
    ListNutritionistsComponent,
    DetailCoachComponent,
    SuscriptionsComponent,
    ProfileComponent,
    HomeGoalNextComponent,
    PaymentsComponent,
    ProgramsComponent,
    ProgramsTrainingComponent,
    FaqComponent,
    ComplainsDoubtsComponent,
    StrengthTrainingChallengeComponent,
    PremiumComponent,
    ChallengeComponent,
    ExclusiveContentComponent,
    ProcessComponent,
    AnalysisComponent,
    ContactFormComponent,
    AuthenticationSectionComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbar,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatAnchor,
    MatCardHeader,
    MatCardContent,
    NgOptimizedImage,
    MatButton,
    HttpClientModule,
    MatIcon,
    MatMenuItem,
    MatMenuTrigger,
    MatMenu,
    MatFormField,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authenticationInterceptor])),
    GymsApiService,
    ProfileApiService,
    TestimonialsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
