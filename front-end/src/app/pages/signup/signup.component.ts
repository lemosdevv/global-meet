import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterLayoutComponent } from "../../components/register-layout/register-layout.component";

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RegisterLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    const missingFields: string[] = [];
    if (!this.signupForm.value.name) {
      missingFields.push("Nome");
    } else if (this.signupForm.value.password !== this.signupForm.value.passwordConfirm) {

      this.toastService.error("As senhas não coincidem");
      return;
    }
    
    this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success("Registrado com Sucesso"),
      error: (err) => {
        if (err.status === 409) {
          this.toastService.error("O email já existe");
        } else {
          this.toastService.error("Erro inesperado! Tente novamente mais tarde");
        }
      }
    });
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
