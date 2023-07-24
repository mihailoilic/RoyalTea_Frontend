import { Injectable } from '@angular/core';
import { ICurrency } from '../../interfaces/i-currency';
import { IProduct, IProductPrice } from '../../interfaces/i-product';
import { CurrencyApiService } from './currency-api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencies: ICurrency[] = [];
  selectedCurrency: ICurrency = {id: 0, isoCode: ""};
  changeSelectedCurrency: Function;

  constructor(private currencyApiService: CurrencyApiService) {

    
    this.changeSelectedCurrency = (newCurrency: ICurrency) => {
      this.selectedCurrency = newCurrency;
      localStorage.setItem("currency", String(newCurrency.id));
    };
    
    this.currencyApiService.getAll().subscribe({
      next: data => {
        this.currencies = data;
        this.selectedCurrency = this.currencies[0];

        let lsCurrency = localStorage.getItem("currency");

        if(lsCurrency){
          let currencyObj = this.currencies.find(x => x.id == Number(lsCurrency));

          if(currencyObj)
            this.selectedCurrency = currencyObj;
        }

      },
      error: err => console.log(err)
    });
  }

  public getPrice(prices: IProductPrice[]): IProductPrice {

    let selectedCurrencyIso = this.selectedCurrency.isoCode;
    let price = prices.find(x => x.currencyIso == selectedCurrencyIso);
    
    return price ?? {currencyIso: selectedCurrencyIso, value: 0};
}

}
