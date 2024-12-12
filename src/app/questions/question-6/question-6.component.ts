import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-6',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './question-6.component.html',
  styleUrl: './question-6.component.css'
})
export class Question6Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/7']);
  }

  goBack(): void {
    this.router.navigate(['/questions/pause-3']);
  }
}
