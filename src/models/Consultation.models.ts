export class Consultation{
    id_consultation:number;
    montant:number;
    date:Date;
    id_hopital:number;
    id_malade:number;
    etat:number
    constructor(id_consultation:number,montant:number,date:Date,id_hopital:number,id_malade:number,etat:number){
        this.id_consultation=id_consultation;
        this.montant=montant;
        this.date=date;
        this.id_hopital=id_hopital;
        this.id_malade=id_malade;
        this.etat=etat
    
        }
}