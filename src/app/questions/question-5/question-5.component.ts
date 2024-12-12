import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-5',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './question-5.component.html',
  styleUrl: './question-5.component.css'
})
export class Question5Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/pause-3']);
  }

  goBack(): void {
    this.router.navigate(['/questions/4']);
  }
}
