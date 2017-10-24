import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  search(e) {
      e.preventDefault();
      let query = e.target[0].value;
      this.router.navigate(['searchresults', query]);
    }
}
