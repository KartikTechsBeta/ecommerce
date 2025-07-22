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
          name: 'Wireless Headphones',
          image: 'https://images.unsplash.com/photo-1580894732444-8ecdedb64d83?auto=format&fit=crop&w=500&q=60',
          price: 199
        },
        {
          name: 'Smart Watch',
          image: 'https://images.unsplash.com/photo-1606813902894-53b38f22f2d8?auto=format&fit=crop&w=500&q=60',
          price: 149
        },
        {
          name: 'Bluetooth Speaker',
          image: 'https://images.unsplash.com/photo-1583224477502-7c7f2c073292?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
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
          name: 'Sneakers',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 129
        },
        {
          name: 'Denim Jacket',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        },
        {
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        }
      ]
    },
     {
      category: 'Fashion',
      products: [
        {
          name: 'Sneakers',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 129
        },
        {
          name: 'Denim Jacket',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        },
        {
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        }
      ]
    },
     {
      category: 'Fashion',
      products: [
        {
          name: 'Sneakers',
          image: 'https://images.unsplash.com/photo-1585386959984-a415522b010d?auto=format&fit=crop&w=500&q=60',
          price: 129
        },
        {
          name: 'Denim Jacket',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60',
          price: 89
        },
        {
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        },
        {
          name: 'Wrist Watch',
          image: 'https://images.unsplash.com/photo-1519744346365-3f6f8910a575?auto=format&fit=crop&w=500&q=60',
          price: 99
        }
      ]
    }
    // Add more categories as needed
  ];
}
