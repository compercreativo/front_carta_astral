import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-9',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './question-9.component.html',
  styleUrl: './question-9.component.css'
})
export class Question9Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/pause-6']);
  }

  goBack(): void {
    this.router.navigate(['/questions/pause-5']);
  }
}
