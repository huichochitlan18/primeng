import { Component, Input, ViewChild, inject } from '@angular/core';
import { AllPrimeNGModule } from '../../modules/primeng.module';
import { Sidebar } from 'primeng/sidebar';
import { SidebarService } from '../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AllPrimeNGModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public _sidebarService = inject(SidebarService);
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;


  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }
  
}
