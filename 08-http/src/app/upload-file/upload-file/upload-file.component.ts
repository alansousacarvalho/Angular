import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filterResponse, UploadProgress } from 'src/app/shared/rxjs-operators';
import { UploadFileService } from 'src/app/shared/services/upload-file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  progresso = 0;
  files!: Set<File>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }
  /** Recupera o evento "(change)" do template e add. o arquivo no "this.files" */
  onChange(event: any) {
    console.log(event);
    const selectedFiles = <FileList>event.srcElement.files;
    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name); //nome do arquivo;
      this.files.add(selectedFiles[i]); //add o arquivo no files.
    }
    this.progresso = 0;
  }

  /** Faz o upload do arquivo a partir do valor recebido do método 'onChange', além de efetuar
   * a lógica do progress-bar, chamando os operadores RxJS customizados.
   */
  onUpload() {
    //Verif. se existe 1 arquivo && tamanho > 0.
    if (this.files && this.files.size > 0) {
      this.uploadService.upload(this.files, environment.BASE_URL + '/upload').pipe(
        UploadProgress(progress => {
          console.log(progress);
          this.progresso = progress;
        }),
        filterResponse()
      )
        .subscribe({
          next: (response) => {
            console.log('Upload Concluído.');
          }
        });
      // .subscribe( {
      //   next: (event: HttpEvent<Object>) => {
      //     //console.log(event);
      //     if(event.type == HttpEventType.Response) {
      //       console.log('Upload Concluído.');
      //     } else if (event.type == HttpEventType.UploadProgress) {
      //       const porcentagem = Math.round((event.loaded * 100) / (event.total || 1));
      //       this.progresso = porcentagem;
      //     }
      //   }
      // });
    }
  }
  /** Download do Excel */
  onDownloadExcel() {
    this.uploadService.download(environment.BASE_URL + '/downloadExcel').subscribe({
      next: (res: any) => {
        //criando 1 arquivo e setando o tipo.
        this.uploadService.handleFile(res, 'report.xlsx')
      }
    });
  }

  /** Download do PDF */
  onDownloadPDF() {
    this.uploadService.download(environment.BASE_URL + '/downloadExcel').subscribe({
      next: (res: any) => {
        //criando 1 arquivo e setando o tipo.
        this.uploadService.handleFile(res, 'report.pdf')
      }
    });
  }

}
