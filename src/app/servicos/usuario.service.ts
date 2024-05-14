import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Usuario {
  idUsuario: string;
  nomeUsuario: string;
  telefoneUsuario: string;
  emailUsuario: string;
  senhaUsuario: string;
  cpfUsuario: string;
  idAcesso: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost/makeup_db/apiPdv01/usuario';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Usuario[]>(this.url);
  }

  getDados(idUsuario: string) {
    return this.http.get<Usuario>(this.url + '/' + idUsuario);
  }

  remove(idUsuario: any) {
    return this.http.delete(this.url + '/' + idUsuario);
  }

  create(usuario: Usuario) {
    return this.http.post(this.url, usuario);
  }

  update(usuario: Usuario, idUsuario: any) {
    return this.http.put(this.url + '/' + idUsuario, usuario);
  }

  getEmail(emailUsuario: any, senhaUsuario: any) {
    return this.http.get(this.url + '/' + emailUsuario + '/' + senhaUsuario);
  }

  getBusca(emailUsuario: any) {
    return this.http.get(this.url + '/' + emailUsuario);
  }

  getFuncionariosIdAcesso(idAcesso: number) {
  return this.http.get<Usuario[]>(this.url + '?idAcesso=' + idAcesso);
}

cadastrar(usuario: Usuario) {
  usuario.idAcesso = '3';
  return this.create(usuario);
}

getNomeUsuario(idUsuario: string): Observable<string> {
    return this.http.get<Usuario>(this.url + '/' + idUsuario).pipe(
      map(usuario => usuario.nomeUsuario)
    );
  }

}