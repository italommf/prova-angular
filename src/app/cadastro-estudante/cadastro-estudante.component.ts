import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-estudante',
  templateUrl: './cadastro-estudante.component.html',
  styleUrls: ['./cadastro-estudante.component.css']
})
export class CadastroEstudanteComponent implements OnInit{
  estudanteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.estudanteForm = this.formBuilder.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.estudanteForm.valid) {
      // Aqui você pode enviar os dados do formulário para onde precisar, por exemplo, para um serviço
      console.log(this.estudanteForm.value);
    }
  }
}
