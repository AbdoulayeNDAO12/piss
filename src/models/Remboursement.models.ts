export class Remboursement{
    id_remboursement:number;
    date:Date;
    montant:number;
    id_notif:number;
    id_benef:number;
    id_prest:number;
    constructor(id_remboursement:number,date:Date,montant:number,id_notif:number,id_benef:number,id_prest:number){
    this.id_remboursement=id_remboursement;
    this.date=new Date();
    this.montant=montant;
    this.id_notif=id_notif;
    this.id_benef=id_benef;
    this.id_prest=id_prest;
    }

}