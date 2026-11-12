import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Contato } from './contato.model';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  // Lista que guarda os contatos já cadastrados
  contatos: Contato[] = [];

  // Formulário reativo com todos os campos e suas regras de validação
  formContato = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    aniversario: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required])
  });

  adicionarContato(): void {
    // Segurança extra: se o formulário estiver inválido, interrompe a função
    if (this.formContato.invalid) {
      return;
    }

    // Obtém todos os valores digitados de uma só vez
    const valores = this.formContato.value;

    // Cria o objeto Contato usando o molde da Parte 1
    const novoContato = new Contato(
      valores.nome!,
      valores.telefone!,
      valores.email!,
      valores.aniversario!,
      valores.tipo!
    );

    // Adiciona na lista e limpa o formulário voltando aos valores vazios
    this.contatos.push(novoContato);
    this.formContato.reset({
      nome: '',
      telefone: '',
      email: '',
      aniversario: '',
      tipo: ''
    });
  }
}