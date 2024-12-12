import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './question-1.component.html',
  styleUrl: './question-1.component.css'
})
export class Question1Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/2']);
  }

  goBack(): void {
    this.router.navigate(['/questions']);
  }
}
