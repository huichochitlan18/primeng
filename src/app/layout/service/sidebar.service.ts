import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Menu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarVisible = signal<boolean>(false);
  private _httpClient = inject(HttpClient);
  constructor() {}

  updateSidebar() {
    this.sidebarVisible.update((value) => !value);
  }
  menu(){
    return this._httpClient.get<Menu>('../../../assets/json/menu.json');
  }
}
