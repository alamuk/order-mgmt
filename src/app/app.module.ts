import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// export const metaReducers: MetaReducer<any>[] = !environment.production
//   ? [storeFreeze]
//   : [];

import { AppComponent } from './app.component';

import { OrdersService } from './orders/services/orders.service';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './nagivation/header/header.component';
import { SidenavListComponent } from './nagivation/sidenav-list/sidenav-list.component';
import { environment } from '../environments/environment';

import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    OrdersModule, // DashboardComponent, SettingsComponent
    CustomersModule,
    ProductsModule, // New module
    SuppliersModule,
    AppRoutingModule,
    FlexLayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
