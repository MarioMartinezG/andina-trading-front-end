import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MenuItem } from 'primeng/api';

import { UpdateInversionistaDto } from '../../models';

import { NotificationService } from '../../../commons/services/notification.service';
import { AuthService } from '../../../auth/services/auth.service';

import { DatosGeograficosService } from '../../services/datos-geograficos.service';
import { InversionistaService } from '../../services/inversionista.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  inversionista: any;

  // Formulario
  dataInversionistaForm!: FormGroup;
  loading: boolean = false;

  //Data dropdowns
  paises: any[] | undefined;
  ciudades: any[] | undefined;


  constructor(
    private readonly _inversionistaService: InversionistaService,
    private readonly _datosGeograficosService: DatosGeograficosService,
    private readonly _authService: AuthService,
    private readonly _notificationService: NotificationService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.dataInversionistaForm = this.fb.group({
      primerNombre: new FormControl('', Validators.required),
      segundoNombre: new FormControl(''),
      primerApellido: new FormControl('', Validators.required),
      segundoApellido: new FormControl(''),
      correo: new FormControl('', [Validators.required, Validators.email]),
      cuenta: new FormControl(null, Validators.required),
      direccion: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required)
    });

    this.cargarDataGeografica();
    this.consultarInversionista();
    this.initBreadCrumb();
  }
  private consultarInversionista() {
    const id = this._authService.getElementFromUserStorage('id');
    this._inversionistaService.getInversionista(id).subscribe({
      next: (data) => {
        this.inversionista = data;
        this.poblarFormulario();
      },
      error: (error) => {
        console.error('Error al consultar el inversionista:', error);
        this._notificationService.addMessage('error', 'Error al consultar el inversionista');
      }
    });
  }

  actualizarInformacion() {
    this.loading = true;

    const { direccion, pais, ciudad, cuenta } = this.dataInversionistaForm.value;

    const data: UpdateInversionistaDto = {
      id: this._authService.getElementFromUserStorage('id'),
      address: direccion,
      country: pais,
      city: ciudad,
      bank_account: Number(cuenta)
    };

    console.log(data);

    this._inversionistaService.updateInversionista(data).subscribe({
      next: (data) => {
        this._notificationService.addMessage('success', 'Operación realizada con éxito.');
      },
      error: (error) => {
        const { message } = error.error;
        this._notificationService.addMessage('error', `Error: ${message}`);
      }
    });
    this.loading = false;
  }

  private poblarFormulario() {
    const { fullName, email, address, country, city, bank_account } = this.inversionista;
    
    const { ...inversionista } = this.descomponerFullName(fullName);

    this.dataInversionistaForm = this.fb.group({
      primerNombre: new FormControl(inversionista.primerNombre, Validators.required),
      segundoNombre: new FormControl(inversionista.segundoNombre),
      primerApellido: new FormControl(inversionista.primerApellido, Validators.required),
      segundoApellido: new FormControl(inversionista.segundoApellido),
      correo: new FormControl(email, [Validators.required, Validators.email]),
      cuenta: new FormControl(bank_account, Validators.required),
      direccion: new FormControl(address, Validators.required),
      pais: new FormControl(country, [Validators.required]),
      ciudad: new FormControl(city, [Validators.required]),
    });
  }

  private cargarDataGeografica() {
    this._datosGeograficosService.getPaises().subscribe({
      next: (data) => {
        this.paises = data;
      },
      error: (error) => {
        this._notificationService.addMessage('error', 'Ocurrió un error al cargar la data geográfica');
        console.error('Error al obtener países:', error); // Manejar errores
      }
    });

    this._datosGeograficosService
  }

  cambioPais(event: any) {
    const paisSeleccionado = event.value;

    if (paisSeleccionado) {
      this._datosGeograficosService.getCiudades(paisSeleccionado).subscribe({
        next: (data) => {
          this.ciudades = data;
        },
        error: (error) => console.error('Error al obtener las ciudades:', error.error.msg)
      });
    } else {
      this.ciudades = [];
    }
  }

  private descomponerFullName(fullName: string): any {
    // Dividir fullName en palabras
    const partes = fullName.trim().split(' ');

    // Crear objeto para almacenar los nombres y apellidos
    const resultado: any = {};

    // Asignar valores basados en las condiciones
    if (partes.length >= 2) {
      resultado.primerNombre = partes[0]; // Obligatorio
      resultado.primerApellido = partes[1]; // Obligatorio
    }
    if (partes.length === 3) {
      resultado.segundoNombre = partes[1]; // Opcional si hay tres partes
      resultado.primerApellido = partes[2];
    }
    if (partes.length === 4) {
      resultado.segundoNombre = partes[1]; // Opcional si hay cuatro partes
      resultado.primerApellido = partes[2];
      resultado.segundoApellido = partes[3]; // Opcional
    }

    return resultado;
  }

  private initBreadCrumb() {
    this.breadcrumbItems.push({ label: 'Datos inversionista' });
    this.breadcrumbItems.push({ label: 'Modificar Datos Básicos' });
  }
}
