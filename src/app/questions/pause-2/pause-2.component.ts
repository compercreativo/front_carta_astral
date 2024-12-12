import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-2',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pause-2.component.html',
  styleUrl: './pause-2.component.css'
})
export class Pause2Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/4']);
  }

  goBack(): void {
    this.router.navigate(['/questions/3']);
  }
}
