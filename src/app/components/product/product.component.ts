import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Iproduct[]=[];

  constructor(private productservice : ProductService)
  {   
  }

  ngOnInit(): void {
    this.products=this.productservice.getallproduct();
  }

  delete(productid:number){

     this.products =this.products.filter((product)=> product.id != productid);

  }

}
