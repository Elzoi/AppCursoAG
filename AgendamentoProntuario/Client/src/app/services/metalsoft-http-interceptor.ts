import { Injectable } from '@angular/core';
import { HttpEvent, HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import 'rxjs/add/operator/catch';

import { DataTransferObject } from '../model/data-transfer-object.model';
import { MetalsoftResponse } from '../model/metalsoft-response.model';

@Injectable()
export class MetalsoftHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //return next.handle(req);
    return next
      .handle(req)
      .catch(err => {
        if (err instanceof HttpErrorResponse) {
          let dto = this.dealWithLowLevelError(err);
          return new EmptyObservable();
        }
        else {
          return Observable.throw(err);
        }
      });
  }

  dealWithLowLevelError(err: HttpErrorResponse) {
    let genericErrorMessageDto = new DataTransferObject();
    genericErrorMessageDto.response = new MetalsoftResponse();
    genericErrorMessageDto.response.hasException = true;

    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      this.Log(err.error.message);
      genericErrorMessageDto.response.exception = "Uma operação não foi concluída com sucesso. Consulte o log.";
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.Log('[' + err.status + '] ' + err.error);
      genericErrorMessageDto.response.exception = "[${err.status}] Uma operação não foi concluída com sucesso. Consulte o log.";
    }
    return genericErrorMessageDto;
  }

  Log(msg) {
    //TODO
    console.log(msg);
  }
}

/*
The err parameter to the callback above is of type HttpErrorResponse, and contains useful information on what went wrong.
There are two types of errors that can occur. If the backend returns an unsuccessful response code (404, 500, etc.), it gets returned as an error. Also, if something goes wrong client-side, such as an exception gets thrown in an RxJS operator, or if a network error prevents the request from completing successfully, an actual Error will be thrown.
In both cases, you can look at the HttpErrorResponse to figure out what happened.
*/
