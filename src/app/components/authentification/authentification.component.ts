import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent  {

  constructor(public authenficationService: AuthentificationService) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password; 

    this.authenficationService.login(username,password)

  }

}
