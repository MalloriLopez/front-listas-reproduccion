// src/app/core/interceptors/basic-auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const BasicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('http://localhost:8080/')) {
    const username = 'usuarioTest';
    const password = 'password';
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    const authReq = req.clone({
      setHeaders: {
        Authorization: basicAuth,
      },
    });
    return next(authReq);
  }
  return next(req);
};
