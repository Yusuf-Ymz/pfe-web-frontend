import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent {
  accountTypes = ['doctor', 'establishment'];
  hide = true;
  current = 'establishment';

  constructor(public authenficationService: AuthentificationService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    this.authenficationService.login(username, password);
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    const username = form.value.username;
    const password = form.value.password;
    const firstname = form.value.firstName;
    const lastname = form.value.lastName;
    const name = form.value.name;

    console.log(username, password);

    this.authenficationService.register(
      this.current,
      username,
      password,
      firstname,
      lastname,
      name
    );
  }

  onType(type: string) {
    console.log(type);
    this.current = type;
  }
}
