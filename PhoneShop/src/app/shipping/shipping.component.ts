import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Observable} from "rxjs";
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-shipping',
  standalone: true,
    imports: [
        AsyncPipe,
        CurrencyPipe
    ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{

    constructor(private cartService: CartService) { }

    shippingCosts!: Observable<{ type: string, price: number}[]>;

    ngOnInit(): void {
        this.shippingCosts = this.cartService.getShippingPrices();
    }

}
