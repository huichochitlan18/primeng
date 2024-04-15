import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sidebarVisible = signal<boolean>(false);
  constructor() { }
  updateSidebar() {
    this.sidebarVisible.update((value) => !value);
  }
}
