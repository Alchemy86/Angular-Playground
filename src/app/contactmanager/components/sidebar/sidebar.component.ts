import { Component, OnInit, NgZone } from '@angular/core';
import { MediaQueryList } from '@angular/flex-layout';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private mediaMatcher: MediaQueryList = 
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone: NgZone) { 
    // Trigger change detection for resizing the screen at applying media change
    this.mediaMatcher.addListener(x => 
      zone.run(() => this.mediaMatcher = x));
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
