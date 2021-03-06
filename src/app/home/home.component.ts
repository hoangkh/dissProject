import { Component, OnInit } from '@angular/core';
import { Thread } from '../thread/Thread';
import { ThreadService } from '../thread/thread.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  threads: Thread[];
  constructor(private ts: ThreadService) { }

  ngOnInit() {
    this.ts
      .getThreads()
      .subscribe((data: Thread[]) => {
        this.threads = data;
    });
  }

}
