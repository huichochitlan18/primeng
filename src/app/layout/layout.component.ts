import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarService } from './service/sidebar.service';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet, SidebarComponent, ToolbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  test = false;
  public _sidebarService = inject(SidebarService);
  
  chaange() {
    console.log(this.test);
  }

}
