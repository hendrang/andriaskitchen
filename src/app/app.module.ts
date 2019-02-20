import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ModalSimpleComponent,
    CategoryFilterPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [ProductsService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
