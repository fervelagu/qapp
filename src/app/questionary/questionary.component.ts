import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {
  form = this.fb.group({
    questions: this.fb.array([
      '', [Validators.required]
    ])
  })
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  createQuestions(q){
    return this.fb.group({
      q: '',
      anwser: ''
    })
  }

  
}
