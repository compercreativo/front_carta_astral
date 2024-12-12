import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.css'
})
export class Section3Component {
  constructor(private router: Router) {}

  irAInit() {
    // Navegar hacia la ruta 'init'
    console.log('sdfgsdfg')
    this.router.navigate(['/questions']);
  }
}
