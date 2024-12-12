import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-2',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './question-2.component.html',
  styleUrl: './question-2.component.css'
})
export class Question2Component {

  array1to31: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  array1to28: number[] = Array.from({ length: 28 }, (_, i) => i + 1);
  array1to30: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

  days: number[] = [];
  months = [
    { value: 1, label: '01' },
    { value: 2, label: '02' },
    { value: 3, label: '03' },
    { value: 4, label: '04' },
    { value: 5, label: '05' },
    { value: 6, label: '06' },
    { value: 7, label: '07' },
    { value: 8, label: '08' },
    { value: 9, label: '09' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' }
  ];

  years: number[] = [];
  selectedMonth: number = 1;
  selectedYear: number = new Date().getFullYear() - 18;

  constructor(private router: Router) {
    this.initYears();
    this.updateDays();
  }

  initYears() {
    const currentYear = new Date().getFullYear() - 18;
    for (let i = currentYear; i >= 1950; i--) {
      this.years.push(i);
    }
  }

  isLeapYear(year: number): boolean {
    // Verifica si un año es bisiesto
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  change() {
    this.router.navigate(['/questions/pause-1']);
  }

  goBack(): void {
    this.router.navigate(['/questions/1']);
  }

  updateDays() {
    const month = Number(this.selectedMonth)

    if (month === 2) {
      // Febrero
      const isLeap = this.isLeapYear(this.selectedYear);
      this.days = Array.from({ length: isLeap ? 29 : 28 }, (_, i) => i + 1);
    } else if ([4, 6, 9, 11].includes(month)) {
      // Meses con 30 días
      this.days = Array.from({ length: 30 }, (_, i) => i + 1);
    } else {
      // Meses con 31 días
      this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    }
  }
}
