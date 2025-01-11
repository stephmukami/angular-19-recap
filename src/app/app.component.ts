import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  template: `

    <app-header />
    <app-products-list/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Ecommerce Site';
}
