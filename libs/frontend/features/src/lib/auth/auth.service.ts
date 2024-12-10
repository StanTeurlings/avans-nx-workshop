// import { BehaviorSubject, catchError, map, Observable } from "rxjs";
// import { HttpHeaders } from "@angular/common/http";
// import { User } from "../user/user.model";
// import { IuserIdentity } from "@avans-nx-workshop/shared/api";
// import { environment } from '@avans-nx-workshop/shared/util-env';

// export class AuthService {
//     public currentUser$ = new BehaviorSubject<IuserIdentity | undefined> (undefined);
    
//     private readonly CURRENT_USER = 'currentUser';

//     private readonly headers = new HttpHeaders({
//         'Content-Type': 'application/json'
//     });

//     login(email: string, password: string): Observable<IuserIdentity> {
//         console.log (`login at ${environment.dataApiUrl}login`);

//         return this.http
//         .post(
//             `${environment.dataApiUrl}login`,
//             { email, password },
//             { headers: this.headers }
//         )
//         .pipe(
//             map((response: any) => {
//                 const user = { ...response } as User;
//                 this.saveUserToLocalStorage(user);
//                 this.currentUser$.next(user);
//                 this.alertService.success('Logged in successfully');
//                 return user;
//             }),
//             catchError((error: any) => {
//                 console.log('error', error);
//                 console.log('error.message:', error.message);
//                 console.log('error.error.message:', error.error.message);
//                 this.alertService.error(error.error.message || error.message);
//                 return of(undefined); 
//             }   
//     }

//     getUserFromLocalStorage(): Observable<User> {
//         const localUser = JSON.parse(localStorage.getItem(this.CURRENT_USER));
//         return of(localUser);
//     }

//     private saveUserToLocalStorage(user: User): void {
//         localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
//     }
// }