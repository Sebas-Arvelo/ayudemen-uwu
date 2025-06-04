
import { Component } from '@angular/core';
import { AboutusMembersComponentComponent } from "./components/aboutus-members-component/aboutus-members-component.component";
import { AboutusHowComponentComponent } from "./components/aboutus-how-component/aboutus-how-component.component";
import { AboutusNavbarComponentComponent } from "./components/aboutus-navbar-component/aboutus-navbar-component.component";
import { AboutusDescriptionComponentComponent } from './components/aboutus-description-component/aboutus-description-component.component';
import { AboutusPartnersComponentComponent } from './components/aboutus-partners-component/aboutus-partners-component.component';
import { AboutusContactComponentComponent } from './components/aboutus-contact-component/aboutus-contact-component.component';
import { AboutusFaqComponentComponent } from './components/aboutus-faq-component/aboutus-faq-component.component';
import { AboutusFooterComponentComponent } from './components/aboutus-footer-component/aboutus-footer-component.component';



@Component({
  selector: 'about-us-page',
  imports: [AboutusMembersComponentComponent, AboutusHowComponentComponent,
  AboutusNavbarComponentComponent,  AboutusDescriptionComponentComponent,
  AboutusPartnersComponentComponent, AboutusContactComponentComponent,
  AboutusFaqComponentComponent, AboutusFooterComponentComponent],
  templateUrl: './about-us-page.html',
})
export class AboutUsPageComponents { }
