import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwt');
    if (token) {
      if (
        req.url !=
        'http://localhost:8080/lunchtime/menu/findallavailablefortoday'
      ) {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', token),
        });
        return next.handle(authReq);
      } else {
        return next.handle(req);
      }
    } else {
      return next.handle(req);
    }
  }
}

// http://localhost:8080/lunchtime/menu/findallavailablefortoday
