import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const apiToken = typeof localStorage !== 'undefined' ? localStorage.getItem("apiToken") : null;
  const cloneReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${apiToken}`
    }
  })
  return next(cloneReq);
};
