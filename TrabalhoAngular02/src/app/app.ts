import { Component } from '@angular/core';
import { AdicionaContatoComponent } from './adiciona-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdicionaContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Agenda';
}