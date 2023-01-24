import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  getproduct(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book").pipe(map((res:any)=>{
      return res;
    }))
  }
}
