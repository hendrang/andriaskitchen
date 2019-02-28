import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { ModalSimpleComponent } from './shared/modal-simple/modal-simple.component';
import { DataStorageService } from './shared/data-storage.service';
import { CategoryFilterPipe } from './shared/category-filter.pipe';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ModalSimpleComponent,
    CategoryFilterPipe,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [ProductsService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
