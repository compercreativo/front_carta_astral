import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-3',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pause-3.component.html',
  styleUrl: './pause-3.component.css'
})
export class Pause3Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/6']);
  }

  goBack(): void {
    this.router.navigate(['/questions/5']);
  }
}
