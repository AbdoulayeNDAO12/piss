export class Filleul{
    id_filleul:number;
    situat_famillial:string;
    prenom:string;
    nom:string;
    date_nais:String;
    id_parrain:number;
    histoire:String;
    etat:number
    constructor(id_filleul:number,situat_famillial:string,prenom:string, nom:string,date_nais:String,id_parrain:number,histoire:String,etat:number){
        this.id_filleul=id_filleul;
        this.situat_famillial=situat_famillial;
        this.prenom=prenom;
        this.nom=nom;
        this.date_nais=date_nais;
        this.id_parrain=id_parrain;
        this.histoire=histoire;
        this.etat=etat
    }
}