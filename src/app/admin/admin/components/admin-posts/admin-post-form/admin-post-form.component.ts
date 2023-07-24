import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { BlogApiService } from 'src/app/shared/services/blog/blog-api.service';

@Component({
  selector: 'app-admin-post-form',
  templateUrl: './admin-post-form.component.html',
  styleUrls: ['./admin-post-form.component.scss']
})
export class AdminPostFormComponent implements OnInit {

  form: FormGroup;

  editor: any = ClassicEditor;
  editorData: string = "<p>Post content goes here!</p><p></p><p></p>";
  editorConfig: any = { 
    toolbar: [ "undo", "redo", "|", 
              "heading", "|", 
              "bold", "italic", "|",
              "numberedList", "bulletedList", "|",
              "indent", "outdent", "|", "insertTable"  
            ] 
  };

  @ViewChild("file") fileInput: ElementRef;
  filePath: string = "";
  setFilePath(path: string): void {
    console.log(path)
    this.filePath = path;
  }

  errorMsg: string;

  constructor(
    private dialogRef: MatDialogRef<AdminPostFormComponent>,
    private blogApi: BlogApiService
    ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }

  submit(): void {

    let formData = new FormData();
    formData.append("title", this.form.get("title").value);
    formData.append("imageFile", this.fileInput.nativeElement.files[0]);
    formData.append("content", this.editorData);

    Spinner.show();

    this.blogApi.create(formData).subscribe({
      next: data => {
        Spinner.hide();
        this.dialogRef.close(true);
      },
      error: err => {
        Spinner.hide();
        console.log(err);
        this.errorMsg = "Error adding new post. " + err.error.message;
      }
    })
  }

}
