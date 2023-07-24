import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { OrdersApiService } from '../api/orders-api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormService extends BaseFormService {

  public form: FormGroup;

  constructor(private ordersApi: OrdersApiService) { 
    super();
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      fullName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(/^\p{Lu}[\s\p{L}]+$/u)]),
      email: new FormControl("", [Validators.email, Validators.required]),
      address: new FormControl("", [Validators.required, Validators.minLength(10)]),
    });
  }
  protected prepareDataToSend(): any {
    return this.form.value;
  }
  
  public submit(): Observable<any> {

    let data: any = this.prepareDataToSend();

    return this.ordersApi.create(data);
    
  }

}
