import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { AllPrimeNGModule } from '../../modules/primeng.module';
import { Sidebar } from 'primeng/sidebar';
import { SidebarService } from '../service/sidebar.service';
import { HeaderComponent } from './header/header.component';
import { Menu } from '../interface/menu.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AllPrimeNGModule, HeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  public _sidebarService = inject(SidebarService);
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  menu: Menu = [];

  constructor(){
    this.getMenu();
  }
  ngOnInit(): void {
    // this.getMenu();
  }

  getMenu(){
    this._sidebarService.menu().subscribe(menu=>{
      this.menu = menu;
    })
  }
}
