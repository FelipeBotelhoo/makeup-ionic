import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MercadoPagoService {
  private backendUrl = 'http://localhost/makeup_db/apiPdv04/api.php'; // Substitua pela URL do seu backend PHP

  constructor(private http: HttpClient) {}

  createPreference(preferenceData: any) {
    return this.http.post(this.backendUrl, preferenceData);
  }
}