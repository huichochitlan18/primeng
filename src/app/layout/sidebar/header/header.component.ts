import { Component, Input, ViewChild, inject } from '@angular/core';
import { AllPrimeNGModule } from '../../../modules/primeng.module';
import { Sidebar } from 'primeng/sidebar';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AllPrimeNGModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public _sidebarService = inject(SidebarService);
  @Input() sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }
}
