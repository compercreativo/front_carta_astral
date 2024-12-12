import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pause-1.component.html',
  styleUrl: './pause-1.component.css'
})
export class Pause1Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/3']);
  }

  goBack(): void {
    this.router.navigate(['/questions/2']);
  }
}
