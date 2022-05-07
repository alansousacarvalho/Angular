import { AbstractControl, FormArray, FormControl, ValidatorFn } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const totalChecked: ValidatorFn = (formArray: AbstractControl) => {
      // const totalChecked = formArray.controls
      //   .map(v => v.value)
      //   .reduce((total, current) => current ? total + current : total, 0);
      // return totalChecked >= min ? null : { required: true };
      if(formArray instanceof FormArray) {
        const totalSelected = formArray.controls
          .map(v => v.value)
          .reduce((total,current) => (current ? total + current : total), 0);
        return totalSelected >= min ? null : { required: true }
      }
      throw new Error('formArray is not an instance of FormArray');
    };
    return totalChecked;
  }

  static cepValidator(control: FormControl) {
    console.log(control);
    const cep = control.value;

    if(cep && cep !== '') {
      const validacep = /^[0-9]{5}-[0-9]{3}$/;
      return validacep.test(cep) ? null : { cepInvalido : true };
    }
    return null;
  }
}
