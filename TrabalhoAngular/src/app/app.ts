import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  bim1: number = 0;
  bim2: number = 0;
  media: number | null = null;
  situacao: string = '';

  calcularMedia(): void {
    // Cálculo com os pesos do enunciado
    this.media = (2 * this.bim1 + 3 * this.bim2) / 5;

    // Definição da situação
    if (this.media >= 60) {
      this.situacao = 'Aprovado(a)';
    } else if (this.media >= 10) {
      this.situacao = 'Avaliação final';
    } else {
      this.situacao = 'Reprovado(a)';
    }
  }
}