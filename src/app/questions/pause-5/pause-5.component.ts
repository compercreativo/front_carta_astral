import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-5',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pause-5.component.html',
  styleUrl: './pause-5.component.css'
})
export class Pause5Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/9']);
  }

  goBack(): void {
    this.router.navigate(['/questions/8']);
  }
}
