import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialogRef!: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  openModal(component: any, cssClasses?: string[]) {
    const config = {
      ...(cssClasses && { panelClass: cssClasses }), // Apply CSS classes if provided
    };
    this.dialogRef = this.dialog.open(component, config);
  }

  closeModal() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
