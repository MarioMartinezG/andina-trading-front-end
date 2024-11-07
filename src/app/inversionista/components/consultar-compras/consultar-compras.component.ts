import { Component, OnInit } from '@angular/core';

import { Table } from 'primeng/table';

import { InversionistaService } from '../../services/inversionista.service';

import { CompraAccion } from '../../models';


@Component({
  selector: 'app-consultar-compras',
  templateUrl: './consultar-compras.component.html',
  styleUrl: './consultar-compras.component.css'
})
export class ConsultarComprasComponent implements OnInit {
  comprasAcciones: CompraAccion[] = [];
  cols: any[] = [];
  statuses: any[] = [];


  constructor(
    private readonly _inversionistaService: InversionistaService
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'fechaCompra', header: 'Fecha de Compra' },
      { field: 'cantidad', header: 'Cantidad' },
      { field: 'precioAccion', header: 'Precio por Acción' },
      { field: 'costoTotal', header: 'Costo Total' },
      { field: 'comision', header: 'Comisión' },
      { field: 'valorActualAccion', header: 'Valor Actual por Acción' },
      { field: 'valorActualTotal', header: 'Valor Actual Total' },
      { field: 'gananciaPerdida', header: 'Ganancia/Pérdida' },
      { field: 'cambio', header: '% Cambio' },
      { field: 'dividendos', header: 'Dividendos Recibidos' },
      { field: 'sector', header: 'Sector' },
      { field: 'ticker', header: 'Ticker' },
      { field: 'empresa', header: 'Empresa' },
      { field: 'periodoTenencia', header: 'Periodo de Tenencia' },
    ];

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];


    this._inversionistaService.getCompras().subscribe(response => {
      this.comprasAcciones = response;
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getBadgeClass(accion: CompraAccion): string {
    return accion.unrealizedProfitLoss > 0 ? 'p-badge-success' : 'p-badge-danger';
  }
}
