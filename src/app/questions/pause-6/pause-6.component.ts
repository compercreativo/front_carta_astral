import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-6',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './pause-6.component.html',
  styleUrl: './pause-6.component.css'
})
export class Pause6Component {
  progress: number = 0;
  intervalId: any;

  constructor(private router: Router) {
    this.startProgress();
  }

  change() {
    this.router.navigate(['/questions/10']);
  }

  startProgress() {
    // Incrementa la variable 'progress' cada 50 milisegundos hasta llegar a 100
    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        clearInterval(this.intervalId);
        this.router.navigate(['/questions/10']); // Navega automáticamente a la página '/questions/10'
      }
    }, 50);
  }

  goBack(): void {
    this.router.navigate(['/questions/9']);
  }
}
