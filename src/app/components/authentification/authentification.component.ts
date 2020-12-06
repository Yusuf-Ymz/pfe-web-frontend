import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service'
import {MatOptionSelectionChange} from '@angular/material/core';
import {stringify} from 'querystring';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent  {

  accountTypes = ['doctor','establishment']
  hide = true
  current = '';

  constructor(public authenficationService: AuthentificationService) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    this.authenficationService.login(username,password)
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }

  onType(type: string){
    console.log(type);
    this.current = type;
  }

}
