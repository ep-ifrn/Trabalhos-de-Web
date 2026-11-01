import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contato } from './contato.model';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  listaContatos: Contato[] = [];

  nome: string = '';
  telefone: string = '';
  email: string = '';
  aniversario: string = '';
  tipo: string = 'Amigo(a)';

  adicionar(): void {
    if (this.nome && this.telefone) {
      const novo = new Contato(
        this.nome,
        this.telefone,
        this.email,
        this.aniversario,
        this.tipo
      );
      this.listaContatos.push(novo);
      this.limparFormulario();
    }
  }

  limparFormulario(): void {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.aniversario = '';
    this.tipo = 'Amigo(a)';
  }
}