import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ThemeService } from '../../services/theme.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Theme } from '../../interface/themes.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selectedState: any = null;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' },
  ];

  cities1: any[] = [];
  cities2: any[] = [];
  city1: any = null;
  city2: any = null;

  themeService = inject(ThemeService);
  breakpointObserver = inject(BreakpointObserver);
  themes:Theme[]=[];
  constructor() {
    this.breakpointObserver.observe([
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait
    ]).subscribe((x) => console.log(x));
  }

  ngOnInit(): void {
    this.themeService.listThemes().subscribe(x=>{
      this.themes = x;
    });
  }
  selectOption($event:DropdownChangeEvent){
    this.changeTheme($event.value.bundleName);
  }
  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
  
}
