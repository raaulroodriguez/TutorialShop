import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {HttpClientModule} from "@angular/common/http";
import {CartComponent} from "./cart/cart.component";

@Component({
  selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        TopBarComponent,
        RouterOutlet,
        HttpClientModule,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/