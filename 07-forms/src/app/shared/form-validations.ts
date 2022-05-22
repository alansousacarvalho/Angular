import { FormControl, FormGroup } from "@angular/forms";

export class FormValidations {

  // static requiredMinCheckbox(min = 1) {
  //   const totalChecked: ValidatorFn = (formArray: AbstractControl) => {
  //     // const totalChecked = formArray.controls
  //     //   .map(v => v.value)
  //     //   .reduce((total, current) => current ? total + current : total, 0);
  //     // return totalChecked >= min ? null : { required: true };
  //     if(formArray instanceof FormArray) {
  //       const totalSelected = formArray.controls
  //         .map(v => v.value)
  //         .reduce((total,current) => (current ? total + current : total), 0);
  //       return totalSelected >= min ? null : { required: true }
  //     }
  //     throw new Error('formArray is not an instance of FormArray');
  //   };
  //   return totalChecked;
  // }

  static cepValidator(control: FormControl) {
    // console.log(control);
    const cep = control.value;

    if (cep && cep !== '') {
      const validacep = /^[0-9]{5}-[0-9]{3}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  /** Validação entre 2 campos */
  static equalTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if(!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }
      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('Informe um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }
      return null
    };
    return validator;
  }

  /** Serviços de mensagens de Erros (Comentado pois está dando erro)*/
  // static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
  //   const config = {
  //     'required': `${fieldName} é obrigatório.`,
  //     'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
  //     'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
  //     'cepInválido': 'CEP inválido.',
  //   };

  //   return config[validatorName];
  // }
}
