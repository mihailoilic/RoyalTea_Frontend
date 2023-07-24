import { Component, OnInit } from '@angular/core';
import { ADMIN_LINKS } from 'src/app/constants/admin-links';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  adminLinks: any[] = ADMIN_LINKS;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  useCasesAvailable(useCases: number[]): boolean {
    let availableUseCases = JSON.parse(this.authService.token.UseCaseIds);
    return useCases.every(x => availableUseCases.includes(x));
  }

}
