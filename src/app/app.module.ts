import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop/shop.component';
import { SingleproductComponent } from './shop/singleproduct/singleproduct.component';
import { CartComponent } from './shop/cart/cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ServiceComponent,
    BlogComponent,
    AboutComponent,
    ShopComponent,
    SingleproductComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    ContactComponent,
    CdkVirtualScrollViewport,
    BlogSingleComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
