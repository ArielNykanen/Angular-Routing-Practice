import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  onLoadServers(id: Number) {
    // complex code here
    this.router.navigate(['servers', id, 'edit'], {queryParams: {editMode: '1'}, fragment: 'loading'});

  }

  ngOnInit() {
  }

}
