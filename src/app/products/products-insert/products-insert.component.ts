import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../products.interfaces';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: ProductsService) {
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.minLength(3)]],
      cost: ['', Validators.required],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const product = this.form.value as Product;
      this.service.insertProduct(product).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
