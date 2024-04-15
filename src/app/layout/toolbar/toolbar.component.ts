import { Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { AllPrimeNGModule } from '../../modules/primeng.module';
import { MenuItem } from 'primeng/api';
import { SidebarService } from '../service/sidebar.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AllPrimeNGModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  
  public _sidebarService = inject(SidebarService);
  
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }
}
