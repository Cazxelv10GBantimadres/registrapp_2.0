import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scanQRCode() {
    // Lógica para escanear código QR
    console.log('Escanear código QR');
    // Aquí puedes agregar la lógica para escanear el código QR
  }

  generateQRCode() {
    // Lógica para generar código QR
    console.log('Generar código QR');
    // Aquí puedes agregar la lógica para generar el código QR
  }

}