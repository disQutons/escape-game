import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/app-config.model';
import { lastValueFrom } from 'rxjs';

/**
 * Service for managing application configuration
 * Loads external configuration settings from a JSON file
 */
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig = {
    apiUrl: '',
    apiKey: '',
  };
  private configLoaded = false;

  constructor(private http: HttpClient) {}

  /**
   * Loads configuration from an external JSON file
   * @returns Promise with the loaded configuration
   */
  async loadConfig(): Promise<AppConfig> {
    if (this.configLoaded) {
      return this.config;
    }

    try {
      this.config = await lastValueFrom(
        this.http.get<AppConfig>('./assets/config.json')
      );
      this.configLoaded = true;
      return this.config;
    } catch (error) {
      console.error('Error loading configuration', error);
      throw error;
    }
  }

  /**
   * Retrieves the value of a configuration property
   * @param key The configuration key to retrieve
   * @returns The value associated with the key
   */
  get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    if (!this.configLoaded) {
      console.warn(
        'Attempting to access configuration before it has been loaded'
      );
    }
    return this.config[key];
  }
}
