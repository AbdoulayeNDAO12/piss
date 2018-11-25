export class Medicament{
    id_medicament:number;
    libelle:string;
    quantite:number;
    prix:number;
    id_pharmacie:number;
    constructor(id_medicament:number,libelle:string,quantite:number,prix:number,id_pharmacie:number){
        this.id_medicament=id_medicament;
        this.libelle=libelle;
        this.quantite=quantite;
        this.prix=prix;
        this.id_pharmacie=id_medicament
    }
}