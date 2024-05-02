import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import { ProfessionalsComponent } from './public/pages/professionals/professionals/professionals.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {ListCoachesComponent} from "./public/pages/list-coaches/list-coaches.component";
import { ListNutritionistsComponent } from './public/pages/list-nutritionists/list-nutritionists.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailCoachComponent } from './public/pages/detail-coach/detail-coach.component';
import {CoachDataService} from "./gympal/services/coach-data.service";
import {GymsApiService} from "./gympal/services/gyms-api.service";
import { SuscriptionsComponent } from './public/pages/suscriptions/suscriptions.component';
import {MatIcon} from "@angular/material/icon";

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
    SuscriptionsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbar,
        MatAnchor,
        MatCardHeader,
        MatCardModule,
        MatCardContent,
        NgOptimizedImage,
        MatButton,
        HttpClientModule,
        MatIcon
    ],
  providers: [
    provideAnimationsAsync(),
    CoachDataService,
    GymsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
