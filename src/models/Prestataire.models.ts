export class Prestataire{
    id_prest:number;
    nom:string;
    id_user:number;
    type:string;
    id_compte:number;
    constructor(id_prest:number,nom:string,id_user:number,type:string,id_compte:number){
        this.id_prest=id_prest;
        this.nom=nom;
        this.id_user=id_user;
        this.id_compte=id_compte
    }
    
}