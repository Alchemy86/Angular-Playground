import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.user = this.service.userById(id);
    })
  }

}
