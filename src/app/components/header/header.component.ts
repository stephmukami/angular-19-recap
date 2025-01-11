import { Component, inject, Inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
      <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl" routerLink="/">Angie's Store</span>
      <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'"
      routerLink="/cart"
      ></app-primary-button>
    </div>

    
  `,
  styles: 
  `

  `
})

export class HeaderComponent {
  // constructor(public cartService: CartService) {} or
  cartService = inject(CartService);
}
