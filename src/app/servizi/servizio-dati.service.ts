import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';
import { Dati } from 'src/app/model/dati';

@Injectable({
  providedIn: 'root',
})
export class ServizioDatiService implements OnInit {
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {}
  private ci: string = '';
  private apiUrl = '/api/GetInfoBadgeDipendente?codiceFiscale='
  private data:any;
  private _showButton:BehaviorSubject<boolean>=new BehaviorSubject(false)
  private _result:BehaviorSubject<object>=new BehaviorSubject({})
  item$=this._showButton.asObservable()
  result$=this._result.asObservable();
  getData(){
      this._result.next(this.http.get(this.apiUrl + this.ci));
  }
  getCI(){
    return this.ci
  }
  setCI(ci:string){
    this.ci= ci
  }
  storeDataV(data: any): void {
    this.data = data;
  }
  getDataV() {
    return this.data;
  }
  cambiaStato(){
    this._showButton.next(!this._showButton.value)
    console.log(this._showButton.value)
  }
  rimuoviZeri(str: string) {
    return str.replace(/^0+/g, '');
  }


}

