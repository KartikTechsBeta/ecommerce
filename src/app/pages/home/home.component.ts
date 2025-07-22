import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Circuit board macro
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Clothes on hanger
  },
  {
    name: 'Home',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Cozy home interior
  },
  {
    name: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Flatlay with gadgets
  }
];

products = [
  {
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Black wireless headphones
    ,
    price: 199
  },
  {
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Modern smart watch
    ,
    price: 149
  },
  {
    name: 'Home Lamp',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // Stylish lamp
    ,
    price: 89
  },
  {
    name: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60' // White sneakers
    ,
    price: 129
  }
];

}

