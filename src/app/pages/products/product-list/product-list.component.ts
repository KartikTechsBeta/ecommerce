import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  categorizedProducts = [
    {
      category: 'Electronics',
      products: [
        {
          id: 1,
          name: 'Wireless Headphones',
          image: 'https://images.unsplash.com/photo-1580894732444-8ecdedb64d83?auto=format&fit=crop&w=500&q=60',
          price: 199
        },
        {
          id: 2,
          name: 'Smart Watch',
          image: 'https://images.unsplash.com/photo-1606813902894-53b38f22f2d8?auto=format&fit=crop&w=500&q=60',
          price: 149
        },
        {
          id: 3,
          name: 'Bluetooth Speaker',
          image: 'https://images.unsplash.com/photo-1583224477502-7c7f2c073292?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
          id: 4,
          name: 'Drone Camera',
          image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=60',
          price: 299
        }
      ]
    },
    {
      category: 'Fashion',
      products: [
        {
          id: 5,
          name: 'Sneakers',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 129
        },
        {
          id: 6,
          name: 'Denim Jacket',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
          id: 7,
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        },
        {
          id: 8,
          name: 'Formal Shoes',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 110
        }
      ]
    },
    {
      category: 'Home',
      products: [
        {
          id: 9,
          name: 'LED Lamp',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 129
        },
        {
          id: 10,
          name: 'Sofa Cushion',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
          id: 11,
          name: 'Wall Clock',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        },
        {
          id: 12,
          name: 'Decor Vase',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 79
        }
      ]
    },
    {
      category: 'Gadgets',
      products: [
        {
          id: 13,
          name: 'Smart Bulb',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 129
        },
        {
          id: 14,
          name: 'VR Headset',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60',
          price: 299
        },
        {
          id: 15,
          name: 'Fitness Tracker',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 149
        },
        {
          id: 16,
          name: 'Power Bank',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 89
        }
      ]
    }
  ];
}
