import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerData = { username: '', email: '', password: '' }; // Datos de registro
  passwordTypeRegister: string = 'password'; // Tipo de input para la contraseña
  passwordIconRegister: string = 'eye-off'; // Icono para la contraseña

  constructor(private router: Router, private toastController: ToastController) {}

  // Lógica para registrar al usuario
  async onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      // Guardar los datos del usuario en localStorage
      localStorage.setItem('username', this.registerData.username);
      localStorage.setItem('email', this.registerData.email);
      localStorage.setItem('password', this.registerData.password);

      // Mostrar mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Registro exitoso. Ahora puedes iniciar sesión.',
        duration: 2000,
        position: 'top',
      });
      toast.present();

      // Redirigir al usuario al login
      this.router.navigate(['/login']);
    }
  }

  // Alternar visibilidad de la contraseña
  togglePassword() {
    this.passwordTypeRegister =
      this.passwordTypeRegister === 'password' ? 'text' : 'password';
    this.passwordIconRegister =
      this.passwordIconRegister === 'eye-off' ? 'eye' : 'eye-off';
  }
}
