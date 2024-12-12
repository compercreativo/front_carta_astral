import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-8',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './question-8.component.html',
  styleUrl: './question-8.component.css'
})
export class Question8Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/pause-5']);
  }

  goBack(): void {
    this.router.navigate(['/questions/pause-4']);
  }

  toggleButton(event: Event): void {
    const button = event.target as HTMLElement;
    button.classList.toggle('active');
  }
}
