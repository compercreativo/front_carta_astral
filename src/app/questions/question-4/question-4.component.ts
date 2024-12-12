import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ApiService } from '../../api-service/api-service.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-4',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './question-4.component.html',
  styleUrl: './question-4.component.css'
})
export class Question4Component implements OnInit {
  public items: any[] = [];
  public cities: any[] = [];
  public filteredCities: any[] = [];
  public selectedCity: string = '';
  public isOptionsVisible: boolean = false;
  public searchQuery: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  

  toggleOptions(): void {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  change() {
    this.router.navigate(['/questions/5']);
  }

  goBack(): void {
    this.router.navigate(['/questions/pause-2']);
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.items = response.data;
        console.log('Datos recibidos:', this.items);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  getCities(country: any): void {
    this.apiService.createItem({ country }).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.cities = response.data;
        this.filteredCities = [...this.cities]; // Inicializa las ciudades filtradas
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }

  filterCities(query: string): void {
    this.filteredCities = this.cities.filter((city) =>
      city.toLowerCase().includes(query.toLowerCase())
    );
  }

  selectCity(city: string): void {
    this.searchQuery = city; // Reemplaza el texto del input con la ciudad seleccionada
    this.filteredCities = [...this.cities];
  }

  
}