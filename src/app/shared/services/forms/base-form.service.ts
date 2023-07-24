import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormService {

  public abstract form: FormGroup;
  public abstract submit(): void;

  protected abstract initializeForm(): void;
  protected abstract prepareDataToSend(): any;
  

  constructor() { }
}
