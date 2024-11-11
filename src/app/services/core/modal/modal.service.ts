import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public toggleModal = false;
  public bottomToggleModal = false;
  dialogRef!: MatDialogRef<unknown>;

  constructor(private dialog: MatDialog) {}

  openModal(
    component: ComponentType<unknown> | TemplateRef<unknown>,
    cssClasses?: string[],
  ): void {
    const config = {
      ...(cssClasses && { panelClass: cssClasses }), // Apply CSS classes if provided
    };
    this.dialogRef = this.dialog.open(component, config);
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
