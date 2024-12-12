import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, catchError, map, Observable, of, switchMap } from "rxjs";
import { User } from "../user/user.model";
import { IUserIdentity } from "@avans-nx-workshop/shared/api";
import { environment } from "@avans-nx-workshop/shared/util-env";
import { Injectable } from "@angular/core";
import { AlertService } from "../../../../common/alert/alert.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  public currentUser$ = new BehaviorSubject<IUserIdentity | undefined>(
    undefined
  );

  private readonly CURRENT_USER = "currentUser";

  private readonly headers = new HttpHeaders({
    "Content-Type": "application/json",
  });

  // Inject HttpClient via constructor
  constructor(
    private alertService: AlertService,
    private http: HttpClient,
    private router: Router
  ) {
    this.getUserFromLocalStorage()
      .pipe(
        // switchMap is overbodig als we validateToken() niet gebruiken...
        switchMap((user: User) => {
          if (user) {
            console.log('User found in local storage');
            this.currentUser$.next(user);
            // return this.validateToken(user);
            return of(user);
          } else {
            console.log(`No current user found`);
            return of(undefined);
          }
        })
      )
      .subscribe(() => console.log('Startup auth done'));
  }

  login(emailAddress: string, password: string): Observable<IUserIdentity | undefined> {
    console.log(`login at ${environment.dataApiUrl}/auth/login`);

    return this.http
      .post<User>(
        `${environment.dataApiUrl}/auth/login`,
        { emailAddress, password },
        { headers: this.headers }
      )
      .pipe(
        map((response: any) => {
          const user = { ...response } as User;
          console.log('User = ', user);
          if (response?.results?.status == 401) {
            throw new Error(response?.results?.message || "Login failed");
          }
          this.saveUserToLocalStorage(user);
          this.currentUser$.next(user);
          this.alertService.success("You have been logged in");
          return user;
        }),
        catchError((error: any) => {
          console.error("Login error:", error);
          this.alertService.error(error?.message || "Login failed");
          return of(undefined);
        })
      );
  }

  getUserFromLocalStorage(): Observable<User> {
    const localUser = JSON.parse(
      localStorage.getItem(this.CURRENT_USER) || "{}"
    );
    return of(localUser);
  }

  private saveUserToLocalStorage(user: User): void {
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }
}
