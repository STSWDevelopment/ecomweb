import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
})
export class LandingComponent {
  trendingProducts = [
    {
      image: '/landing/product1.jpg',
      title: 'Wireless Headphones',
      description: 'Experience crystal-clear sound with long battery life.',
    },
    {
      image: '/landing/product2.jpg',
      title: 'Smartwatch Pro',
      description: 'Track your fitness with style and advanced features.',
    },
    {
      image: '/landing/product3.jpg',
      title: 'Gaming Keyboard',
      description: 'RGB lighting with mechanical keys for top-tier gaming.',
    },
    {
      image: '/landing/product4.jpg',
      title: 'Gaming Keyboard',
      description: 'RGB lighting with mechanical keys for top-tier gaming.',
    },
  ];
}
