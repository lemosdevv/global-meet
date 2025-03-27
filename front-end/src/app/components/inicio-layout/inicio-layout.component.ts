import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inicio-layout',
  imports: [],
  templateUrl: './inicio-layout.component.html',
  styleUrl: './inicio-layout.component.scss'
})
export class InicioLayoutComponent {
  @Input() title: string = "";
  @Input() title2: string = "";

}
