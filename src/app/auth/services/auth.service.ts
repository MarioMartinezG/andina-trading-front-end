import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { LoginDTO } from '../models/auth.interface';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/auth-api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _URL_API = 'http://localhost:3000';
  private _BASE_ENDPOINT = '/api/auth';
  private _URL_LOGIN_ENDPOINT = `${this._URL_API}${this._BASE_ENDPOINT}/login`;

  constructor(
    private readonly _http: HttpClient
  ) { }

  login(loginDto: LoginDTO): Observable<LoginResponse> {
    return this._http.post<any>(this._URL_LOGIN_ENDPOINT, loginDto);
  }

  logOut() {
    this.clearUserStorage();

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  setUserStorage(data: LoginResponse) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getElementFromUserStorage(key: string) {
    const userJSON = localStorage.getItem('user');

    if (userJSON) {
      const user = JSON.parse(userJSON);
      return user[key] !== undefined ? user[key] : null;
    }
    return null;
  }

  clearUserStorage() {
    localStorage.removeItem('user');
  }
}
