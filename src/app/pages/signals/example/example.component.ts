import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {
  #dataSignal: WritableSignal<string[]> = signal<string[]>([]);
  dataFilter: WritableSignal<string[]> = signal<string[]>([]);
  data = {
    periodo: ['semanal', 'quincenal', 'mensual'],
    limite: ['a', 'b', 'c'],
  };
  datos: string[] = [];

  ngOnInit(): void {
    this.#dataSignal.set(this.data.periodo);
    console.log(this.#dataSignal());
  }
  filter(periodo: string) {
    const filters = {
      semanal: (x: any) => x,
      quincenal: (x: any) => !x.includes('a'),
      mensual: (y: any) => y === 'c',
    };
    if (!filters[periodo as keyof typeof filters]) {
      throw new Error(`Periodo desconocido: ${periodo}`);
    }
    const filterFunction = filters[periodo as keyof typeof filters];

    this.dataFilter.update(() => this.data.limite.filter(filterFunction));
    this.datos = this.data.limite.filter(filterFunction);
  }
}
