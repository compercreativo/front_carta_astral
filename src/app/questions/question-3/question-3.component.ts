import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-3',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './question-3.component.html',
  styleUrl: './question-3.component.css'
})
export class Question3Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/pause-2']);
  }

  goBack(): void {
    this.router.navigate(['/questions/pause-1']);
  }
}
