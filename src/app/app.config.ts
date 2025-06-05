import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(),
  ],
  standaloneComponents: [
    HeaderComponent,
    HeroComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ContactFormComponent,
    FooterComponent,
    HomeComponent
  ]
};
