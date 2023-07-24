import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FiltersFormService {

  form: FormGroup = new FormGroup({});

  constructor() { 
  
  }


  createCheckboxFormArray(items: any[], checked: any[] = []): FormArray {

    const formArray = new FormArray([]);

    items.forEach(x => formArray.push(new FormControl(checked.includes(x))));

    return formArray;
  }

  

}
