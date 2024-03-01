import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  loader= true;

  products: ProductRepresentation[] = [];

  constructor(
    private service: ProductService
  ){}

  ngOnInit(): void {

    setTimeout(()=>{                           
      this.loader = false;
  }, 1000);
    
    this.service.getAllProductsWithLimit()
    .subscribe({
      next:(result) => {
        this.products = result;
      },
        error: (error: HttpErrorResponse) => {
          console.log(error)
        }
    })

  }

}
