import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  data = {
    periodo: ['semanal', 'quincenal', 'mensual'],
    limite: ['a', 'b', 'c'],
  };

  #dataSignal: WritableSignal<string[]> = signal<string[]>([]);
  dataFilter:WritableSignal<string[]> = signal<string[]>([]);
  datos:string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.#dataSignal.set(this.data.periodo);
    console.log(this.#dataSignal());
  }

  filter(periodo: string) {
    const filters = {
      'semanal': (x: any) => x,
      'quincenal': (x: any) => !x.includes('a'),
      'mensual': (y: any) => y === 'c'
    };
    if (!filters[periodo as keyof typeof filters]) {
      throw new Error(`Periodo desconocido: ${periodo}`);
    }
    const filterFunction = filters[periodo as keyof typeof filters];
  
    this.dataFilter.update(() => this.data.limite.filter(filterFunction));
    this.datos = this.data.limite.filter(filterFunction);
  }
}
