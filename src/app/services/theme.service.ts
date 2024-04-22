import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { Theme } from '../interface/themes.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document: Document = inject(DOCUMENT);
  private _httpClient = inject(HttpClient);
  #theme: WritableSignal<HTMLLinkElement> = signal<HTMLLinkElement>(
    this.document.getElementById('app-theme') as HTMLLinkElement
  );
  theme!: string;
  themes:Theme[]=[];
  constructor() {
    if (this.verifyLocalStorage()) {
      this.switchTheme(this.theme);
    }
  }
  switchTheme(theme: string): void {
    this.#theme().href = theme + '.css';
    this.saveLocalStorage(theme);
  }

  verifyLocalStorage(): boolean {
    this.theme = localStorage.getItem('theme')!;
    return this.theme != null;
  }

  saveLocalStorage(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  listThemes(){
    return this._httpClient.get<Theme[]>('../../assets/json/themes.json').pipe(
      map(x=>{
        this.themes = x;
        return x;
      })
    )
  }
}
