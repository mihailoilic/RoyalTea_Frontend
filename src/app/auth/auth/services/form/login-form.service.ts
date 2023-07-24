import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { LoginApiService } from '../api/login-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService extends BaseFormService{

  public form: FormGroup;

  constructor(public loginApiService: LoginApiService) { 
    super();
  }

  public initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }
  protected prepareDataToSend(): any {
    return this.form.value;
  }
  
  public submit(): Observable<any> {

    let data: any = this.prepareDataToSend();  

    return this.loginApiService.create(data);
    
  }
}
