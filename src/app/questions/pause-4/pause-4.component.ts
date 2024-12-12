import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-4',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pause-4.component.html',
  styleUrl: './pause-4.component.css'
})
export class Pause4Component {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/8']);
  }

  goBack(): void {
    this.router.navigate(['/questions/7']);
  }
}
