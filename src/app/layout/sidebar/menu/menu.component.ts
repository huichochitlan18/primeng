import { Component, Input } from '@angular/core';
import { AllPrimeNGModule } from '../../../modules/primeng.module';
import { Menu } from '../../interface/menu.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AllPrimeNGModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menu: Menu = [];
}
