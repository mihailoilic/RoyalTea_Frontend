import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';
import { CheckoutFormService } from '../../services/form/checkout-form.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CheckoutFormComponent>,
    public formService: CheckoutFormService,
    public currencyService: CurrencyService
    ) { }

  ngOnInit(): void {
    this.formService.initializeForm();
  }

  send(): void {
    Spinner.show();
    
    this.formService.submit().subscribe({
      next: data => {
        Spinner.hide();
        this.dialogRef.close(true);
      },
      error: err => {
        console.log(err);
        Spinner.hide();
        this.dialogRef.close();
      }
    });
  }

}
