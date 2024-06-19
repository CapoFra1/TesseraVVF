import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dati } from 'src/app/model/dati';
import { ServizioDatiService } from 'src/app/servizi/servizio-dati.service';

@Component({
  selector: 'app-codice-fiscale',
  templateUrl: './codice-fiscale.component.html',
  styleUrls: ['./codice-fiscale.component.css'],
})
export class CodiceFiscaleComponent implements OnInit{
  constructor(private dati: ServizioDatiService) {}
  ngOnInit(): void {
    this.dati.item$.subscribe(button=>this.button=button);
  }
  button:boolean
  invioCI(form: NgForm) {
    /* this.dati.storeDataV({
      cognome:'Caporaso',
      nome:'Francesco',
      idTessera:'0000000089654',
      codiceInterno:'A57AFRTW',
      codiceInternoHex:'AF23H9',
      codicePrefissoHex:'AF'
    })
    
    this.dati.cambiaStato() */
    
    this.dati.setCI(form.value.ci);
    this.dati.getData()
  }
}
