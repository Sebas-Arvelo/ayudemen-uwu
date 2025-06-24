import { Component } from '@angular/core';
import { AboutusNavbarComponentComponent } from '../about-us/components/aboutus-navbar-component/aboutus-navbar-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [AboutusNavbarComponentComponent, CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
