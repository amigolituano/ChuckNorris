import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from "jquery";

@Component({
  selector: 'app-facts-listing',
  templateUrl: './facts-listing.component.html',
  styleUrls: ['./facts-listing.component.css']
})
export class FactsListingComponent implements OnInit {

  constructor(private http: Http) { }

  allCategories:Array<any>
  randomFactsArray = []
  Facts = []
  err:string

  ngOnInit() {

      this.http.get('https://api.chucknorris.io/jokes/categories')
        .map(res => res.json())
        .subscribe(data => this.allCategories = data);

        this.getRandomFacts();

  }

  getRandomFacts() {
      this.err = "";
      $('form input').removeAttr('checked');
      this.randomFactsArray = [];
      for (var i = 0; i < 30; i++) {
        this.http.get('https://api.chucknorris.io/jokes/random')
          .map(res => res.json())
          .subscribe(data => {
              var temp = this.randomFactsArray.map(function(fact) {
                  return fact.value;
              })
              if (temp.indexOf(data.value) === -1) {
                  if (data.category === null) {
                      data.category=[];
                      data.category.push("uncategorized");
                  }
                  this.randomFactsArray.push(data);
              }
          });
      }

      this.Facts = this.randomFactsArray;
  }

  check(e) {
      if (e.target.childNodes[0].hasAttribute('checked')) {
          e.target.childNodes[0].removeAttribute('checked');
      } else {
        e.target.childNodes[0].setAttribute('checked', true);
      }
  }

  filterByCategory(e) {
    this.err="";
    e.preventDefault();
    this.randomFactsArray = [];

    var request = [];
    for (var i = 0; i < this.allCategories.length; i++) {
      if (e.target[i].checked) {
        request.push(e.target[i].value)
      }
    }
    if (request.length>0) {
        console.log(request[0]);
        for (var i = 0; i<this.Facts.length; i++) {
            for (var j = 0; j < request.length; j++) {
                if (request[j] === this.Facts[i].category[0]) {
                    this.randomFactsArray.push(this.Facts[i]);
                }
            }
        }

        if (this.randomFactsArray.length === 0) {
            this.err = "Results not found, try to choose another category";
        }
    } else {
        this.showAll();
    }
  }

  showAll() {
    $('form input').removeAttr('checked');
    this.randomFactsArray = this.Facts;
  }
}
