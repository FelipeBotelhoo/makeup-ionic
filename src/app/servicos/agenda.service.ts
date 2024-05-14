import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Agenda {
  idAgenda: string;
  idUsuario: string;
  funcionario: string;
  dataAgenda: string;
  horario: string;
  maquiagem: string;
  pagamento: string;
  situacao: string;
  valor: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url = 'http://localhost/makeup_db/apiPdv02/agenda'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[Agenda]>(this.url);
  }

  getDados(idUsuario : string){
    return this.http.get<[Agenda]>(this.url +'/'+idUsuario);
  }

  remove(idAgenda: any) {
    return this.http.delete(this.url + '/' + idAgenda);
  }

  create(agenda: Agenda) {
    return this.http.post(this.url, agenda);
  }

  update(agenda: Agenda, idAgenda: any) {
    return this.http.put(this.url + '/' + idAgenda, agenda);
  }

  /* getEmail(emailUsuario: any, senhaUsuario: any) {
    return this.http.get(this.url + '/' + emailUsuario + '/' + senhaUsuario);
  } */

  /* getBusca(emailUsuario: any) {
    return this.http.get(this.url + '/' + emailUsuario);
  } */
}
