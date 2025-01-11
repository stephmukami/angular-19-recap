import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p class="header">
      {{title()}}
    </p>
  `,
  styles: 
  `
  .header{
    background: grey;
    color: black;
    padding: 1rem
    
  }
 
  `
})
export class HeaderComponent {
  title = signal("Angular Ecommerce App")

}
