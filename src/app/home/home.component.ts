import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Section1Component } from "../section-1/section-1.component";
import { Section2Component } from "../section-2/section-2.component";
import { Section3Component } from "../section-3/section-3.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, Section1Component, Section2Component, Section3Component, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  irAInit() {
    // Navegar hacia la ruta 'init'
    console.log('sdfgsdfg')
    this.router.navigate(['/questions']);
  }
}
