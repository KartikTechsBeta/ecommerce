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
    image: 'assets/images/categories/Electronics/E1.jpg' 
  },
  {
    name: 'Fashion',
    image: 'assets/images/categories/Fashion/fashion.jpg' // Clothes hanging with aesthetic vibe
  },
  {
    name: 'Home',
    image: 'assets/images/categories/Home/home app 1.jpg' // Cozy modern living room
  },
  {
    name: 'Gadgets',
    image: 'assets/images/categories/Gadgets/camera.jpg' // Laptop + tech desk setup
  }
];


products = [
  {
    name: 'Wireless Headphones',
    image: 'assets/images/Trendings/wireless headphone.jpg', // Sleek black headphones
    price: 199
  },
  {
    name: 'Home Lamp',
    image: 'assets/images/Trendings/lamp.jpg', // Minimal modern lamp
    price: 89
  },
  {
    name: 'Smart Watch',
    image: 'assets/images/Trendings/smartwatch.jpg', // Modern watch close-up
    price: 149
  },
  {
    name: 'Sneakers',
    image: 'assets/images/Trendings/shoes 1.jpg', // Stylish white sneakers
    price: 129
  }
];

testimonials = [
  {
    name: 'Aarav Mehta',
    location: 'Mumbai, India',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Top-notch service and quality. My go-to store now!',
    rating: 5
  },
  {
    name: 'Sanya Kapoor',
    location: 'Delhi, India',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'Great packaging and timely delivery. Loved the experience!',
    rating: 4
  },
  {
    name: 'Ishaan Sharma',
    location: 'Bangalore, India',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    message: 'Customer support is super helpful. Highly recommended.',
    rating: 5
  }
];


}

