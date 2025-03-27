import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-layout',
  imports: [],
  templateUrl: './register-layout.component.html',
  styleUrl: './register-layout.component.scss'
})
export class RegisterLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
