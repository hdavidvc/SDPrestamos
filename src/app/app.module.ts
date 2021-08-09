import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {MatTableModule} from '@angular/material/table';

import { PrincipalComponent } from './pages/principal/principal.component';
// Compoenentes
import { DividerComponent } from './components/divider/divider.component';
import { BadgeComponent } from './components/badge/badge.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';

// Cliente
import { NuevoComponent } from './pages/clientes/nuevo/nuevo.component';
import { GaranteComponent } from './pages/clientes/garante/garante.component';
import { RechazarComponent } from './pages/clientes/rechazar/rechazar.component';

// Prestamos
import { PrestamoNuevoComponent } from './pages/prestamos/nuevo/nuevo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    PrincipalComponent,
    BadgeComponent,
    NuevoComponent,
    DividerComponent,
    GaranteComponent,
    RechazarComponent,
    PrestamoNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
