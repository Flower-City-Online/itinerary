import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public toggleModal = false;
  public bottomToggleModal = false;

  constructor() {}
}
