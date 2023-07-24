import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { LoginFormService } from '../../services/form/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg: string = "";
  isRegistration: boolean = false;

  constructor(
    public formService: LoginFormService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
    ) { 
        if(history.state['register'])
          this.isRegistration = true;
    }

  ngOnInit(): void {

    this.formService.initializeForm();
  }

  send(): void {

    Spinner.show();

    this.formService.submit().subscribe({
      next: data => {
        this.authService.setToken(data.token);
        this.cartService.readCart();
        Spinner.hide();
        this.router.navigateByUrl("/");
      },
      error: err => {
        console.log(err)
        if(err.status == 401){
          this.errorMsg = "Wrong username and/or password.";
        }
        Spinner.hide();
      }
    })

  }

}
