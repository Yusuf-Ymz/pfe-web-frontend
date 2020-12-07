import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent {
  hide = true;
  current = 'establishment';
  accountTypes = ['doctor', 'establishment'];
  
  constructor(public authenficationService: AuthentificationService, public navbar: NavbarComponent) { }

  ngOnInit(): void { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authenficationService.login(form.value.username, form.value.password);
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authenficationService.register(
      this.current,
      form.value.username,
      form.value.password,
      form.value.firstname,
      form.value.lastname,
      form.value.name
    );
  }

  onType(type: string) {
    this.current = type;
  }
}
