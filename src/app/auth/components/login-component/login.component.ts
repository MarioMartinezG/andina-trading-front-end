import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Servicios
import { LayoutService } from '../../../layout/service/app.layout.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../commons/services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }
  private crearFormulario() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this._authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this._authService.setUserStorage(response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Se generaron errores en la autenticacion:', error.error.message);
        this.notificationService.addMessage('error', 'Credenciales Incorrectas')
      }
    });
  }




}
