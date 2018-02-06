import {Component} from '@angular/core';
import {SignInProcess} from '../../services/SignInProcess';

@Component({
    selector: 'ngx-auth-firebaseui-providers',
    templateUrl: 'auth.providers.component.html'
})

export class AuthProvidersComponent {

    constructor(public signInProcess: SignInProcess) {
    }

}