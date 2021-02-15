import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AppComponentsModule } from './components/app-components.module';
import { Facebook } from '@ionic-native/facebook/ngx';
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsService } from './services/news.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalCompanyPage } from './pages/modal-company/modal-company.page';
import { ModalCompanyPageModule } from './pages/modal-company/modal-company.module';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    ModalCompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppComponentsModule,
    HttpClientModule,
    ModalCompanyPageModule

    ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    Facebook,
    StatusBar,
    SplashScreen,
    NewsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
