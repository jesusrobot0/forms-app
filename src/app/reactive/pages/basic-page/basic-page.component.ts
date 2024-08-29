import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  // public miForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  // Esto es lo mismo que lo de arriba, solo que más limpio
  // Pero por detras formbuiler hace lo mismo.
  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      price: [0],
      stock: [0],
    });
  }

  onSave(): void {
    console.log(this.myForm.value);
  }
}
