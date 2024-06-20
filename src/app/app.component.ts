import {Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isSmallScreen = false;
  private breakpointSubscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private renderer: Renderer2, private elementRef: ElementRef,public location: Location) {
  }

  ngOnInit(): void {
    this.checkWindowWidth()
    this.breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((state: BreakpointState) => {
      this.isSmallScreen = state.matches;
      if (this.isSmallScreen) {
        // this.router.navigate(['/itineraries'])
        this.renderer.removeClass(document.body, 'customBody');
        console.log('Small screen detected');
      } else {
        this.router.navigate(['/dashboard'])
        this.renderer.addClass(document.body, 'customBody');
        console.log('Large screen detected');
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
      console.log(this.location.path())
      if(this.location.path().includes('dashboard')){
        this.router.navigate(['/itineraries']);
      }
    }
  }
  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
