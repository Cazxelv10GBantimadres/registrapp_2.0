import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = { username: '', password: '' }; // Datos de login
  passwordTypeLogin: string = 'password'; // Tipo de input para la contraseña
  passwordIconLogin: string = 'eye-off'; // Icono para la contraseña

  constructor(private router: Router, private toastController: ToastController) { }

  // Lógica para iniciar sesión
  async onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      // Verifica si los datos del login coinciden con los almacenados
      if (
        this.loginData.username === storedUsername &&
        this.loginData.password === storedPassword
      ) {
        const toast = await this.toastController.create({
          message: 'Inicio de sesión exitoso.',
          duration: 2000,
          position: 'top',
        });
        toast.present();

        // Redirige a la página principal
        this.router.navigate(['/inicio']);  // Asegúrate de que la ruta sea correcta

      } else {
        const toast = await this.toastController.create({
          message: 'Usuario o contraseña incorrectos.',
          duration: 2000,
          position: 'top',
        });
        toast.present();
      }
    }
  }

  // Alternar visibilidad de la contraseña
  togglePassword() {
    this.passwordTypeLogin =
      this.passwordTypeLogin === 'password' ? 'text' : 'password';
    this.passwordIconLogin =
      this.passwordIconLogin === 'eye-off' ? 'eye' : 'eye-off';
  }
}
