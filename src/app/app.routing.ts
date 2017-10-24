import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FactsListingComponent } from './facts-listing/facts-listing.component';
import { FactsByCategoryComponent } from './facts-by-category/facts-by-category.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const appRoutes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "facts",
        component: FactsListingComponent
    },
    {
        path: "factsbycategory",
        component: FactsByCategoryComponent
    },
    {
        path: "searchresults/:q",
        component: SearchResultsComponent
    },
]

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule{}
