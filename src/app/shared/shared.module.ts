import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  providers: [
    MessageService
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    ToastModule,
    LoaderComponent
  ]
})
export class SharedModule { }
