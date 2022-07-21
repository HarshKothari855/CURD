import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public postUser(formData: any) {
    return this.http.post(`${environment.domain}user`, formData)
  } 

  public getUser() {
    return this.http.get(`${environment.domain}user`)
  }

  public deleteUser(user_id: string) {
    return this.http.delete(`${environment.domain}user/${user_id}`)
  }

  public getIdUser(user_id: string) {
    return this.http.get(`${environment.domain}user/${user_id}`)
  }

  public patcUserId(user_id: string, formData: any) {
    return this.http.patch(`${environment.domain}user/${user_id}`, formData)
  }

  public getUserCount() {
    return this.http.get(`${environment.domain}user/total`)
  }

}
