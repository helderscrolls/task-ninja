import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-ninja-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  contentLoaded = false;

  constructor() {}

  ngOnInit(): void {
    // Fake timeout
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
}
