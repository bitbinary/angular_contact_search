import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Constants } from './helper';
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private http: HttpClient) {}
  helperJSON = './helper.json';

  getUsers = () => {
    return this.http.get(Constants.usersAPI);
  };
}
