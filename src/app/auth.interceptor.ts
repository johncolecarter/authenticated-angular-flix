import { Injectable } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the auth token from the service.
        let authToken = this.auth.getToken();
        if (!authToken) {
            authToken = '';
        }


        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const clone = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });




        // send cloned request with header to the next handler.
        return next.handle(clone);
    }
}
