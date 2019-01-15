import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from 'tns-core-modules/ui/page';
import { ReturnKeyType } from 'tns-core-modules/ui/enums';

@Component({
    selector: 'Login',
    moduleId: module.id,
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(
        private router: Router,
        private page: Page,
    ) {
        this.email = 'fazza128@me.com';
        this.password = 'password';
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        // this.page.cssClasses.add("page-background");
        this.page.backgroundImage = 'res://bg_login';
        this.page.backgroundSpanUnderStatusBar = true;
    }

    onLoginWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For log in with social provider you can add your custom logic or
        * use NativeScript plugin for log in with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSigninButtonTap(): void {
        const email = this.email;
        const password = this.password;

        this.router.navigate(['/select-mission']);

    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }

    onButtonTap(): void {
        console.log("Button was pressed");
    }
}
