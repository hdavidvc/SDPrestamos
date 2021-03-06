import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

// Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

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
import { ConsultaComponent } from './pages/prestamos/consulta/consulta.component';
import { EjecutivoComponent } from './pages/prestamos/ejecutivo/ejecutivo.component';
import { EditarComponent } from './pages/prestamos/editar/editar.component';
import { AgregarComponent } from './pages/prestamos/agregar/agregar.component';
import { FestivosComponent } from './pages/prestamos/festivos/festivos.component';
import { EstadoComponent } from './pages/prestamos/estado/estado.component';
import { CanceladosComponent } from './pages/prestamos/cancelados/cancelados.component';
import { IngresoGastoComponent } from './pages/estadistica/ingreso-gasto/ingreso-gasto.component';
import { CobrarComponent } from './pages/pagos/cobrar/cobrar.component';
import { OtrosComponent } from './pages/pagos/otros/otros.component';
import { ConsultaCobroComponent } from './pages/pagos/consulta/consulta.component';
import { DepositoComponent } from './pages/cobrador/deposito/deposito.component';
import { MonitoreoComponent } from './pages/cobrador/monitoreo/monitoreo.component';
import { CelularesComponent } from './pages/cobrador/celulares/celulares.component';
import { RegistroComponent } from './pages/bancos/registro/registro.component';
import { CuentaComponent } from './pages/bancos/cuenta/cuenta.component';
import { TransaccionesComponent } from './pages/bancos/transacciones/transacciones.component';
import { ChequeComponent } from './pages/bancos/cheque/cheque.component';
import { ConsultaChequeComponent } from './pages/bancos/consulta-cheque/consulta-cheque.component';
import { RegistrarComponent } from './pages/gastos/registrar/registrar.component';
import { ConsultarGastosComponent } from './pages/gastos/consultar-gastos/consultar-gastos.component';
import { TiposGastosComponent } from './pages/gastos/tipos-gastos/tipos-gastos.component';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { PasswordComponent } from './pages/usuario/password/password.component';
import { ImagenComponent } from './pages/usuario/imagen/imagen.component';
import { ConsultaDepositoComponent } from './pages/cobrador/consulta-deposito/consulta-deposito.component';
import { DialogDireccionComponent } from './components/dialog-direccion/dialog-direccion.component';

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
    PrestamoNuevoComponent,
    ConsultaComponent,
    EjecutivoComponent,
    EditarComponent,
    AgregarComponent,
    FestivosComponent,
    EstadoComponent,
    CanceladosComponent,
    IngresoGastoComponent,
    CobrarComponent,
    OtrosComponent,
    ConsultaCobroComponent,
    DepositoComponent,
    MonitoreoComponent,
    CelularesComponent,
    RegistroComponent,
    CuentaComponent,
    TransaccionesComponent,
    ChequeComponent,
    ConsultaChequeComponent,
    RegistrarComponent,
    ConsultarGastosComponent,
    TiposGastosComponent,
    NuevoUsuarioComponent,
    PasswordComponent,
    ImagenComponent,
    ConsultaDepositoComponent,
    FilterPipe,
    DialogDireccionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
