import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {
  notFoundTitle: string = 'No encontrado';
  notFoundDesc: string = 'El recurso solicitado no pudo ser encontrado o no se encuentra disponible.';
}
