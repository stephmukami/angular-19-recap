import { Component, inject, Inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
      <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">Angie's Store</span>
      <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'"></app-primary-button>
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
