import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { takeUntil, timeout } from "rxjs/operators";
import { HttpCancelService } from "./cancel";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private httpCancelService: HttpCancelService) {}

  header = new HttpHeaders({});

  intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    request = request.clone({
      // headers: this.header
    });

    return next
      .handle(request)
      .pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()));
  }
}
