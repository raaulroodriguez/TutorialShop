import {Component} from '@angular/core';
import {Provider, providers} from "../providers";
import {products} from "../products";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-provider-details',
    imports: [
        RouterLink
    ],
  templateUrl: './provider-details.html',
  styleUrl: './provider-details.css',
})
export class ProviderDetails {
    provider: Provider | undefined;
    products = [...products];

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const providerIdFromRoute = Number(routeParams.get('providerId'));

        this.provider = providers.find(p => p.id == providerIdFromRoute);
    }

    filterProducts(idProvider: number) {
        return this.products.filter(p => p.providerId === idProvider);
    }
}
