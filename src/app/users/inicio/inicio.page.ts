import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('subjectBox', { read: ElementRef }) subjectBox!: ElementRef;

  constructor(private router: Router, private animationCtrl: AnimationController) {}

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

  generateQRCode() {
    console.log('Generar código QR');
    // Lógica para generar el código QR
  }

  goToLogin() {
    this.router.navigate(['/register']); 
  }

 animateSubjectBox() {
  const animation: Animation = this.animationCtrl.create()
    .addElement(this.subjectBox.nativeElement)
    .duration(0) // Establece la duración a 0 para que no haya animación
    .fromTo('transform', 'translateX(0)', 'translateX(0)'); // Mantén la transformación en la posición original
    
  animation.play();
}
}