import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ApiPersonasService } from '../../core/services/api-personas.service';
import { error } from 'console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private apiService:ApiPersonasService){}

  onLogin(){
    this.apiService.login().subscribe(
      (response)=>{
        localStorage.setItem("apiToken",response.data)
        alert("Login Succesfully")
      },(error)=>{
        alert("Error Login")
      }
    )
  }
}
