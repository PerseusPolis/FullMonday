import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import {ComponentsModule} from './components/components.module';
import {HomePageModule} from './pages/home/home.module';
import {MovieDetailPageModule} from './pages/movie-detail/movie-detail.module';
import {PersonDetailPageModule} from './pages/person-detail/person-detail.module';
import {SearchPageModule} from './pages/search/search.module';

@NgModule({
  declarations: [ AppComponent,

                ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ComponentsModule
      // HomePageModule,
      // MovieDetailPageModule,
      // PersonDetailPageModule,
      // SearchPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
