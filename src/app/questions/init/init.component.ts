import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {
  constructor(private router: Router) {}

  change() {
    this.router.navigate(['/questions/1']);
  }
}
