import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  swalAlertSuccess(title: string) {
    Swal.fire({
      title: `${title}`,
      icon: 'success',
      timer: 2500
    })
  }

  swalAlertError(title: string) {
    Swal.fire({
      title: `${title}`,
      icon: 'error',
      timer: 2500
    })
  }
}
