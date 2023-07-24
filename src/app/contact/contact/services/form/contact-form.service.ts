import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { ContactApiService } from '../api/contact-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService extends BaseFormService {

  public form: FormGroup;

  public message: string;
  public messageColorClass: string;

  constructor(private contactApi: ContactApiService) { 
    super();
  }
  
  public initializeForm(): void {
    this.form = new FormGroup({
      fullName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(/^\p{Lu}[\s\p{L}]+$/u)]),
      email: new FormControl("", [Validators.email, Validators.required]),
      subject: new FormControl("", [Validators.required, Validators.minLength(5)]),
      message: new FormControl("", [Validators.required, Validators.minLength(10)])
    });
  }

  public submit(): void {

    Spinner.show();

    let dataToSend = this.prepareDataToSend();

    this.form.reset();

    this.contactApi.create(dataToSend).subscribe({
      next: data => {
        this.messageColorClass = "text-success";
        this.message = "Your message has been successfully sent.";
        Spinner.hide();
      },
      error: err => {
        console.log(err);
        this.messageColorClass = "text-danger";
        this.message = "Your message couldn't be sent. " + (err.status ? `(${err.status})` : "");
        Spinner.hide();
      }
    });

  }
  protected prepareDataToSend(): any {
    return this.form.value;
  }

}
