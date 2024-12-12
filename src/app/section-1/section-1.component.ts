import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {
  constructor(private router: Router) {}

  irAInit() {
    // Navegar hacia la ruta 'init'
    console.log('sdfgsdfg')
    this.router.navigate(['/questions']);
  }
}
