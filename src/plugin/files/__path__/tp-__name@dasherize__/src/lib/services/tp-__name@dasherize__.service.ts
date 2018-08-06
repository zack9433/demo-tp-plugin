import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from '@tp-ui/tp-core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Tp<%= classify(name) %>Service {
  private readonly URL = '<%= url %>';
  constructor(private restService: RestService) {}

  get<%= classify(name) %>(): Observable<any> {
    return this.restService.get(this.URL).pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
