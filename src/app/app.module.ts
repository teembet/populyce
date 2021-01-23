import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthInterceptor } from "./services/helper/auth-interceptor";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PayvueserviceService } from "./services/payvueservice.service";
import { HttpCancelService } from "././services/helper/cancel";
import { IonicSelectableModule } from "ionic-selectable";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicSelectableModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PayvueserviceService,
    HttpCancelService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
