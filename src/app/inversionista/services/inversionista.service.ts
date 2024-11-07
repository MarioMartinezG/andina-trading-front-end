import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

import { UpdateInversionistaDto, InversionistaResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InversionistaService {
  private _URL_API = 'http://localhost:3000';
  private _BASE_ENDPOINT = '/api/investors';

  constructor(
    private readonly _http: HttpClient,
    private readonly _authService: AuthService
  ) { }

  getInversionista(id: string | null): Observable<InversionistaResponse> {
    const headers = this.getAuthHeaders();

    return this._http.get<InversionistaResponse>(`${this._URL_API + this._BASE_ENDPOINT}/${id}`, { headers });
  }

  updateInversionista(updateInversionistaDto: UpdateInversionistaDto): Observable<InversionistaResponse> {
    const { id, ...updateData } = updateInversionistaDto;
    const headers = this.getAuthHeaders();

    return this._http.patch<InversionistaResponse>(`${this._URL_API + this._BASE_ENDPOINT}/${id}`, updateData, { headers });
  }

  private getAuthHeaders() {
    const token = this._authService.getElementFromUserStorage('token');

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
