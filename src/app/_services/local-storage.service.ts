import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private BASE_KEY: string = 'shopeasy_project_';

  constructor() {}

  set(key: string, value: any) {
    localStorage.setItem(`${this.BASE_KEY}${key}`, JSON.stringify(value));
  }

  get(key: string) {
    const value = localStorage.getItem(`${this.BASE_KEY}${key}`);
    return JSON.parse(value!);
  }
}
