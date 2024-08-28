import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GotInfoService {
  characters!:ICharacter[];
  constructor(private http: HttpClient) {}

  Characters() {
    const url = 'https://thronesapi.com/api/v2/Characters';
    return this.http.get<ICharacter[]>(url);
  }
}
