import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Maquiagem {
  idMaquiagem: string;
  nomeMaquiagem: string;
  valor: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaquiagemService {
  private url = 'http://localhost/makeup_db/apiPdv03/maquiagem';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Maquiagem[]>(this.url);
  }

  getDados(idMaquiagem: string) {
    return this.http.get<Maquiagem>(this.url + '/' + idMaquiagem);
  }

  remove(idMaquiagem: any) {
    return this.http.delete(this.url + '/' + idMaquiagem);
  }

  create(maquiagem: Maquiagem) {
    return this.http.post(this.url, maquiagem);
  }

  update(maquiagem: Maquiagem, idMaquiagem: any) {
    return this.http.put(this.url + '/' + idMaquiagem, maquiagem);
  }

  /* getEmail(emailUsuario: any, senhaUsuario: any) {
    return this.http.get(this.url + '/' + emailUsuario + '/' + senhaUsuario);
  }

  getBusca(emailUsuario: any) {
    return this.http.get(this.url + '/' + emailUsuario);
  } */
}