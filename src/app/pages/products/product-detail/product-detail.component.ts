import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  allProducts: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Sample full product list (same as your ProductListComponent's flat data)
    this.allProducts = [
      { id: 1, name: 'Wireless Headphones', image: 'https://images.unsplash.com/photo-1580894732444-8ecdedb64d83?auto=format&fit=crop&w=500&q=60', price: 199, stock: 10, rating: 4, reviews: 20, brand: 'Sony', category: 'Electronics', description: 'High quality sound.', features: ['Wireless', 'Bluetooth', 'Noise Cancellation'] },
      { id: 2, name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1606813902894-53b38f22f2d8?auto=format&fit=crop&w=500&q=60', price: 149, stock: 7, rating: 5, reviews: 90, brand: 'Apple', category: 'Electronics', description: 'Track your health.', features: ['Heart Monitor', 'Waterproof'] },
      { id: 3, name: 'Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1583224477502-7c7f2c073292?auto=format&fit=crop&w=500&q=60', price: 89, stock: 15, rating: 3, reviews: 45, brand: 'JBL', category: 'Electronics', description: 'Portable music everywhere.', features: ['Loud', 'Rechargeable Battery'] },
      
    ];

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.allProducts.find(p => p.id === id);
  }
}


