import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Datos de Inversionista',
                items: [
                    { label: 'Modificar Datos Básicos', icon: 'pi pi-address-book', routerLink: ['/home/inversionista/datos-basicos'] },
                ]
            },
            {
                label: 'Consulta de Información',
                items: [
                    { label: 'Consultar compras', icon: 'pi pi-shopping-bag', routerLink: ['/home/inversionista/consultar-compras'] },
                    { label: 'Buscar Productos', icon: 'pi pi-search', routerLink: ['/home/inversionista/productos'] },
                ]
            },
        ];
    }
}
