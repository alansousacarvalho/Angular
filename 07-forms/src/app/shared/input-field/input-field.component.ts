import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/** Transformar o component em campo de input */
const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR, //token
  useValue: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACESSOR] //Providers p/ o INPUT FIELD
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() classeCss: any;
  @Input() id?: string;
  @Input() label?: string;
  @Input() type = 'text';
  @Input() placeholder?: string;
  @Input() control: any;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if(v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  constructor() { }

  onChangeCb: (_:any) => void = () => {};
  onTouchedCb: (_:any) => void = () => {};


  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  ngOnInit(): void {
  }


}
