import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormPopupComponent } from '../form-popup/form-popup.component';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(FormPopupComponent);
  }
}

