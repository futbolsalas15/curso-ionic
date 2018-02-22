import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaHabitacionesPageModule } from '../pages/lista-habitaciones/lista-habitaciones.module';
import { HabitacionesProvider } from '../providers/habitaciones/habitaciones';
import { HttpClientModule } from '@angular/common/http';
import { DetalleHabitacionPageModule } from '../pages/detalle-habitacion/detalle-habitacion.module';
import { ReservarHabitacionPageModule } from '../pages/reservar-habitacion/reservar-habitacion.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from '../pages/login/login.module';
import { HomeTabsPageModule } from '../pages/home-tabs/home-tabs.module';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ListaHabitacionesPageModule,
    DetalleHabitacionPageModule,
    ReservarHabitacionPageModule,
    LoginPageModule,
    HomeTabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HabitacionesProvider,
    FavoritosProvider
  ]
})
export class AppModule { }
