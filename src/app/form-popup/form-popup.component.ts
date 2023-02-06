import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent {
  constructor(public dialog: MatDialog) {}

  onSubmit(formValue: any) {
    
  }
}
