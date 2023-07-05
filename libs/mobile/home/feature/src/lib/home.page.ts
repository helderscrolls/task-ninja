import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-ninja-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent implements OnInit {
  contentLoaded = false;

  ngOnInit(): void {
    // Fake timeout
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
}
