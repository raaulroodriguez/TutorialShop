import { Component } from '@angular/core';
import {providers} from "../providers";
import {products} from "../products";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-provider-list',
    imports: [
        RouterLink
    ],
  templateUrl: './provider-list.html',
  styleUrl: './provider-list.css',
})
export class ProviderList {
    providers = [...providers];
    products = [...products];

    filterProducts(idProvider: number) {
        return this.products.filter(p => p.providerId === idProvider);
    }
}
