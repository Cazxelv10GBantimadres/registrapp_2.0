import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('subjectBox', { read: ElementRef }) subjectBox!: ElementRef;
  isQRCodeVisible: boolean = false; // Controla si el QR se muestra o no
  qrCodeImage: string = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png'; // URL del código QR

  // Propiedades para el calendario
  calendarVisible: boolean = false; // Controla la visibilidad del calendario
  currentMonth: Date = new Date(); // Fecha actual
  daysInMonth: { day: number, event: string | null }[] = []; // Días del mes con eventos

  constructor(
    private router: Router,
    private animationCtrl: AnimationController,
    private alertController: AlertController // Inyectamos AlertController para mostrar alertas
  ) {}

  ngOnInit() {
    // Llama a animateSubjectBox después de que la vista se haya inicializado
    setTimeout(() => {
      this.animateSubjectBox();
    }, 1000); // Espera 1 segundo antes de animar el elemento

    this.loadDaysInMonth(); // Cargar los días del mes actual al inicializar
  }

  // Función para escanear el código QR
  scanQRCode() {
    console.log('Escanear código QR');
    // Aquí puedes agregar la lógica para el escaneo del QR
    // Si tienes un plugin de escaneo QR, esta es la función para invocar
  }

  // Redirige a la página de generar QR
  goToGenerateQR() {
    this.router.navigate(['/generate-qr']); // Redirige a la página de generación de QR
  }

  // Función para mostrar/ocultar el calendario
  showCalendar() {
    this.calendarVisible = true; // Muestra el calendario
  }

  hideCalendar() {
    this.calendarVisible = false; // Oculta el calendario
  }

  // Cargar los días del mes actual
  loadDaysInMonth() {
    const daysInMonth: { day: number, event: string | null }[] = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const lastDay = new Date(year, month + 1, 0).getDate(); // Último día del mes

    for (let i = 1; i <= lastDay; i++) {
      let event: string | null = null;

      // Asignar eventos específicos para algunos días
      if (i === 5) {
        event = 'Prueba de Matemáticas';
      } else if (i === 10) {
        event = 'Entrega de Proyecto de Programación';
      } else if (i === 15) {
        event = 'Revisión de Proyecto de Calidad';
      } else if (i === 20) {
        event = 'Último día de clases';
      } else if (i >= 21) {
        event = 'Vacaciones';
      } else {
        event = 'Día de clases'; // Otros días son días de clases normales
      }

      daysInMonth.push({ day: i, event: event });
    }

    this.daysInMonth = daysInMonth;
  }

  // Redirige a la página de login
  goToLogin() {
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  // Animación para la caja de asignaturas
  animateSubjectBox() {
    const animation: Animation = this.animationCtrl.create()
      .addElement(this.subjectBox.nativeElement)
      .duration(0) // Duración de la animación
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)'); // Animación de entrada

    animation.play();
  }
}
