import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQRPage {
  isQRCodeVisible: boolean = false;

  generateQRCode() {
    this.isQRCodeVisible = true;
  }
}
