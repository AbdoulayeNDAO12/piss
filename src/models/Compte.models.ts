export class Compte{
    id_compte:number;
    solde:number;
    id_benef:number;
    etat:number
    constructor(id_compte:number,solde:number,id_benef:number,etat:number){
        this.id_compte=id_compte;
        this.solde=solde;
        this.id_benef=id_benef;
        this.etat=etat
    }
}