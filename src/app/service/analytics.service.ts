import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

/**
 * Interface for user actions
 */
export interface UserAction {
  session_id: string;
  action_name: string;
  details?: any;
}

/**
 * Interface for API responses
 */
export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Service for tracking user analytics and behavior
 * Used to gather anonymous statistics on user progress through the escape game
 */
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private sessionId: string | null = null;
  private readonly sessionStorageKey = 'appantoine_session_id';

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.initSession();
  }

  /**
   * Initialize or retrieve a session ID from localStorage
   * Creates a new session and logs session_start if none exists
   */
  private initSession(): void {
    this.sessionId = localStorage.getItem(this.sessionStorageKey);

    if (!this.sessionId) {
      this.sessionId = this.generateUUID();
      localStorage.setItem(this.sessionStorageKey, this.sessionId);
      // Log session start event
      this.logAction('session_start').subscribe();
    }
  }

  /**
   * Generates a RFC4122 v4 compliant UUID
   * Used to create anonymous session identifiers
   * @returns {string} A UUID string
   */
  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  /**
   * Logs a user action to the analytics backend
   * @param actionName The name of the action being performed
   * @param details Optional details about the action (object)
   * @returns An Observable of the API response
   */
  public logAction(actionName: string, details?: any): Observable<ApiResponse> {
    if (!this.sessionId) {
      this.initSession();
    }

    const actionData: UserAction = {
      session_id: this.sessionId!,
      action_name: actionName,
      details: details || null,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Api-Key': this.configService.get('apiKey'),
      }),
    };

    return this.http
      .post<ApiResponse>(
        this.configService.get('apiUrl'),
        actionData,
        httpOptions
      )
      .pipe(
        tap((_) => console.log(`Action logged: ${actionName}`)),
        catchError(
          this.handleError<ApiResponse>('logAction', {
            success: false,
            error: "Failed to log action",
          })
        )
      );
  }

  /**
   * Resets the current session
   * Clears session ID from localStorage and initializes a new session
   */
  public resetSession(): void {
    localStorage.removeItem(this.sessionStorageKey);
    this.initSession();
  }

  /**
   * Generic error handler for HTTP requests
   * @param operation Name of the operation that failed
   * @param result Default value to return in case of error
   * @returns Function that handles the error and returns a safe result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}