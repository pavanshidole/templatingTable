import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EcommoerceComponent } from './components/E-commerce/E-commerce.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PatientsComponents } from './components/patients/patients.components';
import { StudentsComponent } from './components/students/students.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PlayersComponent } from './components/players/players.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommoerceComponent,
    EmployeesComponent,
    PatientsComponents,
    StudentsComponent,
    ShipmentsComponent,
    TransactionComponent,
    PlayersComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
