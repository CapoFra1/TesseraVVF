import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ServizioDatiService } from 'src/app/servizi/servizio-dati.service';

@Component({
  selector: 'app-tessera',
  templateUrl: './tessera.component.html',
  styleUrls: ['./tessera.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class TesseraComponent implements OnInit{
  constructor(private dati: ServizioDatiService) {}
  button:boolean;
  result:any;
  ngOnInit(): void {
    this.dati.item$.subscribe(button=>this.button=button)
    this.dati.result$.subscribe(result=>this.result=result)
  }
  nome:string=''
  cognome:string=''
  idTessera:string=''
  codiceInterno:string=''
  codiceInternoHex:string=''
  codicePrefissoHex:string=''
  visualizza(){
    this.nome=this.result.nome/* dati.getDataV().nome */
    this.cognome=this.dati.getDataV().cognome
    this.idTessera=this.dati.rimuoviZeri(this.dati.getDataV().idTessera)
    this.codiceInterno=this.dati.getDataV().codiceInterno
    this.codiceInternoHex=this.dati.getDataV().codiceInternoHex
    this.codicePrefissoHex=this.dati.getDataV().codicePrefissoHex
    
    this.dati.cambiaStato()
  }
  


  flip: string = 'inactive';
  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
}
