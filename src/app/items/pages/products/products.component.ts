import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  productsList = [
    {
      category: 'Fruit and Vegetables',
      products: [
        {
          name: 'Tomate'
        },
        {
          name: 'Avocado'
        },
        {
          name: 'Apple'
        },
        {
          name: 'Watermelon'
        },
        {
          name: 'PineApple'
        }
      ]

    },
    {
      category: 'Meat and Fish',
      products: [
        {
          name: 'chicken'
        },
        {
          name: 'Pork'
        },
        {
          name: 'Salomon'
        },
        {
          name: 'Fish'
        },
        {
          name: 'Meat'
        }
      ]

    },
    {
      category: 'Beverages',
      products: [
        {
          name: 'Acocado'
        },
        {
          name: 'Banana'
        },
        {
          name: 'Chicken'
        },
        {
          name: 'Watermelon'
        },
        {
          name: 'Mandarin'
        }
      ]

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
