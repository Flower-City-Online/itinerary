import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItenariesRoutesEnum } from './enums/ItenariesRoutes.enum';
import { BottomNavigationService } from './services/core/bottom-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isSmallScreen = false;
  private breakpointSubscription!: Subscription;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private renderer: Renderer2,
    public el: ElementRef,
    public location: Location,
    public navService: BottomNavigationService,
  ) {}

  ngOnInit(): void {
    this.handleScreenSizeChange();
  }

  //use to change application ui and behaviour based on screen size
  handleScreenSizeChange() {
    this.checkWindowWidth();
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
        if (this.isSmallScreen) {
          this.renderer.removeClass(document.body, 'customBody');
        } else {
          this.router.navigate([ItenariesRoutesEnum.DASHBOARD]);
          this.renderer.addClass(document.body, 'customBody');
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowWidth();
  }

  checkWindowWidth(): void {
    const width = window.innerWidth;
    if (width <= 960) {
      if (this.location.path().includes('dashboard')) {
        this.router.navigate([ItenariesRoutesEnum.ITEENARY]);
      }
    }
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
