import { Component,Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  @Input()
  product: ProductRepresentation = {};
}
