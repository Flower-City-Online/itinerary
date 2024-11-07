import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { CustomDropdownMenuService } from '../../../../services/core/custom-dropdown-menu.service';
import { ModalService } from '../../../../services/core/modal/modal.service';
import { DeleteModalComponent } from '../../../../shared/components/delete-modal/delete-modal.component';
import { ReportItineraryModalComponent } from '../../components/report-itinerary-modal/report-itinerary-modal.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css',
})
export class BuilderComponent implements OnInit {
  showModal = false;
  libMenuItem: LibMenuItem[] = [];
  cssClasses = ['custom-modal-class'];
  ICONS = ICONS;
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('builder');
  }
  constructor(
    public modalService: ModalService,
    public router: Router,
    public customMenuList: CustomDropdownMenuService,
  ) {}

  navigateToArchive() {
    this.router.navigate(['/archives/archives']);
  }
  openModal() {
    // Add your custom CSS classes
    this.modalService.openModal(DeleteModalComponent, this.cssClasses);
  }

  openModal2() {
    this.modalService.openModal(ReportItineraryModalComponent, this.cssClasses);
  }
}
