import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [ReactiveFormsModule, NgIf]
})
export class LoginComponent {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onLogin() {
        if (this.registerForm.valid) {
            if (this.authService.login(this.registerForm.value)) {
                this.router.navigate(['/map']);
                console.log('Login exitoso');
            } else {
                alert('Credenciales incorrectas');
            }
        } else {
            alert('Formulario inválido');
        }
    }


}
