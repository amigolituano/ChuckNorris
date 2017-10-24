import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import * as $ from "jquery";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: Http) { }

  private routeSub: any
  allCategories:Array<any>
  randomFactsArray = []
  Facts = []
  err:string
  query:string

  ngOnInit() {

      this.http.get('https://api.chucknorris.io/jokes/categories')
        .map(res => res.json())
        .subscribe(data => this.allCategories = data);

      this.routeSub = this.route.params.subscribe(params => {
          this.query = params.q;
          if (this.query.length>=3) {
              this.getSearchResults(this.query);
          } else {
              this.err = "Search query should have at least 3 symbols, please try again."
              console.log(this.err);
          }
      })
    }

    getSearchResults(q) {
        this.err= "";
          this.http.get('https://api.chucknorris.io/jokes/search?query='+ q )
            .map(res => res.json())
            .subscribe(data => {
                var temp = data.result;
                for (var i=0; i<temp.length; i++) {
                    if (temp[i].category === null) {
                        temp[i].category=[];
                        temp[i].category.push("uncategorized");
                    }
                }
                console.log(temp[0].value);
                this.randomFactsArray = temp;
                this.Facts = temp;
            });
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
                  this.err = "Results not found after filtering by category, try to choose another category";
              }
          } else {
              this.showAll();
          }
        }

        showAll() {
          this.err="";
          $('form input').removeAttr('checked');
          this.randomFactsArray = this.Facts;
        }

        check(e) {
            console.log(e);
            if (e.target.childNodes[0].hasAttribute('checked')) {
                e.target.childNodes[0].removeAttribute('checked');
            } else {
              e.target.childNodes[0].setAttribute('checked', true);
            }
        }

}
