import { NgModule } from '@angular/core';

// Modulos de PrimeNG
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { DropdownModule } from "primeng/dropdown";
import { MessagesModule } from 'primeng/messages';
import { BadgeModule } from 'primeng/badge';


@NgModule({
  imports: [
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    BreadcrumbModule,
    TableModule,
    DropdownModule,
    MessagesModule,
    BadgeModule,
  ],
  exports: [
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    BreadcrumbModule,
    TableModule,
    DropdownModule,
    MessagesModule,
    BadgeModule,
  ]
})
export class PrimengModule { }
