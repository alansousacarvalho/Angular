import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filterResponse, UploadProgress } from 'src/app/shared/rxjs-operators';
import { UploadFileService } from 'src/app/shared/services/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {
  progresso = 0;
  files!: Set<File>;
  unsubscribe!: Subscription;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

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

  onUpload() {
    //Verificar se existe 1 arquivo e se o tamanho é > 0.
    if(this.files && this.files.size > 0) {
      this.unsubscribe = this.uploadService.upload(this.files, 'http://localhost:8000/upload').pipe(
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

}
