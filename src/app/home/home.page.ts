import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  tabela =
    [{ descricao: 'Z' }, { descricao: 'A' }, { descricao: 'B' }, { descricao: 'C' }, { descricao: 'A' }];

  constructor() { }




}
