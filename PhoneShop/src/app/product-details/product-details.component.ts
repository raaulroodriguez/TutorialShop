import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import { Product, products } from "../products";
import { CartService } from "../cart.service";
import {CurrencyPipe} from "@angular/common";
import {Provider, providers} from "../providers";

@Component({
  selector: 'app-product-details',
  standalone: true,
    imports: [
        CurrencyPipe,
        RouterLink
    ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
    product: Product | undefined;
    provider: Provider | undefined;

    constructor(private route: ActivatedRoute,
                private cartService: CartService
                ) { }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));

        this.product = products.find(p => p.id === productIdFromRoute);

        if (this.product) {
            this.provider = providers.find(p => p.id === this.product?.providerId);
        }
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        window.alert("Your product has been added to the cart!")
    }
}
