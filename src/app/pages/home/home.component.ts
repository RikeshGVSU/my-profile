import { Component } from '@angular/core';

// Import child components
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SummaryComponent } from '../../components/summary/summary.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { EducationComponent } from '../../components/education/education.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
