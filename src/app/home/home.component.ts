import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddTaxPipe } from '../add-tax.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, AddTaxPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  TaxValue:number=1000
}
