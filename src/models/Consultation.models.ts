export class Consultation{
    id_consultation:number;
    montant:number;
    ordonnance:string[];
    date:Date;
    id_hopital:number;
    id_malade:number
    constructor(id_consultation:number,montant:number,ordonnance:string[],date:Date,id_hopital:number,id_malade:number){
        this.id_consultation=id_consultation;
        this.montant=montant;
        this.ordonnance=ordonnance;
        this.date=date;
        this.id_hopital=id_hopital;
        this.id_malade=id_malade
    
        }
}