import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-facts-by-category',
  templateUrl: './facts-by-category.component.html',
  styleUrls: ['./facts-by-category.component.css']
})
export class FactsByCategoryComponent implements OnInit {

    constructor(private http: Http) { }

    allCategories
    randomFactsArray = []
    selectedCategory
    pleaseSelect=true;


    ngOnInit() {
      this.http.get('https://api.chucknorris.io/jokes/categories')
        .map(res => res.json())
        .subscribe(data => this.allCategories = data);

    }

    getFactsByCategory(category) {
        this.pleaseSelect = false;
        this.randomFactsArray = [];

        if (category == "null") {
            this.selectedCategory = "Uncategorized" ;
            for (var i = 0; i < 100; i++) {
              this.http.get('https://api.chucknorris.io/jokes/random')
                .map(res => res.json())
                .subscribe(data => {
                    if(data.category === null) {
                        var temp = this.randomFactsArray.map(function(fact) {
                            return fact.value;
                        });
                        if (temp.indexOf(data.value) === -1) {
                            this.randomFactsArray.push(data);
                        }
                    }
                });
            }
        } else {
            this.selectedCategory = category;
            for (var i = 0; i < 100; i++) {
              this.http.get('https://api.chucknorris.io/jokes/random?category=' + category)
                .map(res => res.json())
                .subscribe(data => {
                    var temp = this.randomFactsArray.map(function(fact) {
                        return fact.value;
                    })
                    if (temp.indexOf(data.value) === -1) {
                        this.randomFactsArray.push(data);
                    }
                });
        }


      }

    }

  }
