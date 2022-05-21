import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));

    // const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);

    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

  /** Request do download */
  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json'
      // reportProgress --> Caso colocar progresso no download.
      // content-type --> Back precisa informar caso opte por colocar o progresso.
    });
  }

  /** Lógica p/ fazer o download */
  handleFile(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type
    });

    const blob = window.URL.createObjectURL(file) //criar 1 link usando 1 objeto(arquivo);
    const link = document.createElement('a') //Criar 1 link e setar o href, e dai fazendo o download;
    link.href = blob;
    link.download = fileName;
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));

    setTimeout(() => { //firefox
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
}
