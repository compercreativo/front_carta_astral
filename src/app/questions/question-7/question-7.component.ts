import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-7',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './question-7.component.html',
  styleUrl: './question-7.component.css'
})
export class Question7Component {
  constructor(private router: Router) { }

  change() {
    this.router.navigate(['/questions/pause-4']);
  }

  goBack(): void {
    this.router.navigate(['/questions/6']);
  }

  toggleButton(event: Event): void {
    const button = event.target as HTMLElement;
    button.classList.toggle('active');
  }
}
