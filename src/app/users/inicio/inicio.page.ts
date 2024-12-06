import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular'; // Añadir AlertController

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('subjectBox', { read: ElementRef }) subjectBox!: ElementRef;
  isQRCodeVisible: boolean = false; // Controla si el QR se muestra o no

  qrCodeImage: string = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png'; // URL del código QR

  constructor(
    private router: Router,
    private animationCtrl: AnimationController,
    private alertController: AlertController // Inyectamos AlertController
  ) {}

  ngOnInit() {
    // Llama a animateSubjectBox después de que la vista se haya inicializado
    setTimeout(() => {
      this.animateSubjectBox();
    }, 1000); // Espera 1 segundo antes de animar el elemento
  }

  scanQRCode() {
    console.log('Escanear código QR');
    // Lógica para escanear el código QR
  }

  // Función para alternar la visibilidad del QR y mostrar la alerta
  async toggleQRCode() {
    this.isQRCodeVisible = !this.isQRCodeVisible; // Alterna la visibilidad del QR

    // Mostrar alerta indicando que el QR ha sido generado exitosamente
    const alert = await this.alertController.create({
      header: 'Código QR Generado',
      message: 'Código QR generado exitosamente.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Función para mostrar el QR en una alerta (si se desea hacer esto aparte)
  async showQRCodeAlert() {
    const alert = await this.alertController.create({
      header: 'Código QR Generado',
      message: '<img src="' + this.qrCodeImage + '" alt="QR Code" style="width: 100%; max-width: 200px;">',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Modificación aquí para redirigir a la página de login
  goToLogin() {
    this.router.navigate(['/login']);  // Redirige a la página de login
  }

  animateSubjectBox() {
    const animation: Animation = this.animationCtrl.create()
      .addElement(this.subjectBox.nativeElement)
      .duration(0) // Establece la duración a 0 para que no haya animación
      .fromTo('transform', 'translateX(0)', 'translateX(0)'); // Mantén la transformación en la posición original

    animation.play();
  }
}
