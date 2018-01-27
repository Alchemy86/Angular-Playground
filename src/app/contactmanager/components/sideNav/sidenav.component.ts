import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class sidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = 
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  users: Observable<User[]>;

  constructor(
    zone: NgZone, 
    private userService: UserService,
    private router: Router) { 
    // Trigger change detection for resizing the screen at applying media change
    this.mediaMatcher.addListener(x => 
      zone.run(() => this.mediaMatcher = x));
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => {
      if (data.length > 0) this.router.navigate(['/contactmanager', data[0].id]); 
    });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall())
        this.sidenav.close();
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
