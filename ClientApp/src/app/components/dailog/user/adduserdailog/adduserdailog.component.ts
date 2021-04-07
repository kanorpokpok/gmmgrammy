import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-adduserdailog',
  templateUrl: './adduserdailog.component.html',
  styleUrls: ['./adduserdailog.component.scss']
})
export class AdduserdailogComponent implements OnInit {

  artistForm: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.artistForm = this.fb.group({
      nameTh: ['', Validators.required],
      nameEn: ['', Validators.required],
      callNameTh: ['', Validators.required],
      callNameEn: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  get xartistForm() { return this.artistForm.controls; }

  // selectCar(artist: any) {
  //   this.ref.close(artist);
  // }

  onSubmit(value: any) {
    this.ref.close(value);
   }

}
