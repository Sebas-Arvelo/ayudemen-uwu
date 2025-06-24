import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  showPassword = false;
  showConfirmPassword = false;
  acceptTerms = false;
  showTermsError = false;
  showSuccess = false;
  fieldNames: { [key: string]: string } = {
    fullname: 'nombre y apellido',
    email: 'correo',
    username: 'nombre de usuario',
    birthdate: 'fecha de nacimiento',
    password: 'contraseña',
    confirmPassword: 'confirmar contraseña'
  };
  fieldError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  emailError: string = '';
  birthdateError: string = '';
  nameError: string = '';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(form: any) {
    // Validar campos vacíos
    const emptyFields = Object.keys(this.fieldNames).filter(
      key => !form.value[key] || form.value[key].toString().trim() === ''
    );
    if (emptyFields.length === 1) {
      this.fieldError = `Por favor rellena ${this.fieldNames[emptyFields[0]]}`;
      this.showTermsError = false;
      this.showSuccess = false;
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.emailError = '';
      this.birthdateError = '';
      this.nameError = '';
      return;
    } else if (emptyFields.length > 1) {
      this.fieldError = 'Por favor rellena todos los campos';
      this.showTermsError = false;
      this.showSuccess = false;
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.emailError = '';
      this.birthdateError = '';
      this.nameError = '';
      return;
    }
    // Validación de nombre y apellido (debe tener al menos dos palabras)
    const fullname = form.value['fullname'] || '';
    if (fullname.trim().split(/\s+/).length < 2) {
      this.nameError = 'Por favor ingresa nombre y apellido';
      this.fieldError = '';
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.emailError = '';
      this.birthdateError = '';
      this.showTermsError = false;
      this.showSuccess = false;
      return;
    } else {
      this.nameError = '';
    }
    // Validación de fecha de nacimiento (mayor de 18 años)
    const birthdate = form.value['birthdate'];
    if (birthdate) {
      const today = new Date();
      const birth = new Date(birthdate);
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      if (age < 18) {
        this.birthdateError = 'Debes ser mayor de 18 años';
        this.fieldError = '';
        this.passwordError = '';
        this.confirmPasswordError = '';
        this.emailError = '';
        this.showTermsError = false;
        this.showSuccess = false;
        return;
      } else {
        this.birthdateError = '';
      }
    }
    // Validación de correo
    const email = form.value['email'] || '';
    if (!email.includes('@')) {
      this.emailError = 'Ingrese un correo válido';
      this.fieldError = '';
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.birthdateError = '';
      this.showTermsError = false;
      this.showSuccess = false;
      return;
    } else {
      this.emailError = '';
    }
    // Validación de contraseña
    const password = form.value['password'] || '';
    const confirmPassword = form.value['confirmPassword'] || '';
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      this.passwordError = 'La contraseña debe tener al menos 8 caracteres, un símbolo, una mayúscula y un número';
      this.fieldError = '';
      this.showTermsError = false;
      this.showSuccess = false;
      this.confirmPasswordError = '';
      this.birthdateError = '';
      this.emailError = '';
      return;
    } else {
      this.passwordError = '';
    }
    // Validación de confirmación de contraseña
    if (password !== confirmPassword) {
      this.confirmPasswordError = 'Las contraseñas no coinciden';
      this.fieldError = '';
      this.showTermsError = false;
      this.showSuccess = false;
      this.birthdateError = '';
      this.emailError = '';
      return;
    } else {
      this.confirmPasswordError = '';
    }
    if (!this.acceptTerms) {
      this.showTermsError = true;
      this.showSuccess = false;
      this.fieldError = '';
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.emailError = '';
      this.birthdateError = '';
      return;
    }
    this.showTermsError = false;
    this.showSuccess = true;
    this.fieldError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';
    this.emailError = '';
    this.birthdateError = '';
    // Aquí iría la lógica de registro real
  }
}
