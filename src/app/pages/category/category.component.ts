import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl }      from '@angular/forms';
import {  CategoryModel } from 'app/models/category.model';
import { CategoryService } from 'app/service/category_service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //VARIABLES
  private json : CategoryModel;

  constructor(private fb: FormBuilder,private categoryService$: CategoryService) { }

  ngOnInit(): void {
  }

  formControlCategory = this.fb.group({
    inputCatgoryName: ['', [Validators.required]],
    inputCatgoryDescription: ['', [Validators.required]],
    inputProductId: [null, []],
  });

  onCategorySave(){
    this.json = {
      description : this.formControlCategory.value.inputCatgoryDescription,
      name : this.formControlCategory.value.inputCatgoryName
    }

    this.categoryService$.addNewCategory(this.json).subscribe(
      (response)=>{
        console.log("SAVE CATEGORY");
        console.log(response);
      }
    )
  }

}
