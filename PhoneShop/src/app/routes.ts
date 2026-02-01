import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {Routes} from "@angular/router";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";
import {ProviderDetails} from "./provider-details/provider-details";
import {Home} from "./home/home";
import {ProviderList} from "./provider-list/provider-list";


const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page'
    },
    {
      path: 'products',
      component: ProductListComponent,
      title: 'Products list'
    },
    {
        path: 'products/:productId',
        component: ProductDetailsComponent,
        title: 'Product details'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart'
    },
    {
        path: 'shipping',
        component: ShippingComponent,
        title: 'Shipping'
    },
    {
        path: 'providers/:providerId',
        component: ProviderDetails,
        title: 'Provider details'
    },
    {
        path: 'providers',
        component: ProviderList,
        title: 'Providers list'
    }
    ];

export default routeConfig;
