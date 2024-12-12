import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-10',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './question-10.component.html',
  styleUrl: './question-10.component.css'
})
export class Question10Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/payment']);
  }

  goBack(): void {
    this.router.navigate(['/questions/pause-6']);
  }
}
