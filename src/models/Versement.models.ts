export class Versement{
    id_versement:number;
    montant:number;
    date_versem: Date;
    id_donneur:number;
    constructor(id_versement:number, montant:number,date_versem: Date,id_donneur:number){
        this.id_versement=id_versement;
        this.id_donneur=id_donneur;
        this.date_versem=date_versem;
        this.montant=montant
    }
}