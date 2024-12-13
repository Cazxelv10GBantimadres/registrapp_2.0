import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQRPage {
  isQRCodeVisible: boolean = false; // Controla si el QR es visible
  qrCodeImage: string = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png'; // Imagen QR predeterminada

  constructor(private router: Router) {}

  // Genera y muestra el código QR
  generateQRCode() {
    this.isQRCodeVisible = true;
  }

  // Navegar hacia atrás
  goBack() {
    this.router.navigate(['/inicio']); // Reemplaza 'inicio' con la ruta de tu página de inicio
  }
}