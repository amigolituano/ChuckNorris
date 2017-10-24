import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from "jquery";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    constructor(private http: Http) {}

    randomFact

    ngOnInit() {

        this.getRandomFact()

    }

    getAnotherFact(e) {
        e.preventDefault();
        this.getRandomFact();

    }

    getRandomFact() {
        this.http.get('https://api.chucknorris.io/jokes/random')
            .map(res => res.json())
            .subscribe(data=>this.randomFact = data);
    }
}
