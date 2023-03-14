import { productarray } from './../models/productarray';
import { Iproduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
array: Iproduct[]=[];
  constructor() { }
  getallproduct(): Iproduct []
  {
    return productarray;
  }

  getproductbyId(productid:number):Iproduct
  {
    return productarray.filter((product)=> product.id == productid)[0];
  }

  // deletebyid (productid : number) {
  //   return productarray.filter((product)=> product.id != productid);
  // }
}
