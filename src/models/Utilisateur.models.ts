export class Utilisateur{
    id_user:number;
    prenom:string;
    nom:string;
    adresse:string;
    profession:string;
    telephone:string;
    sexe:string;
    date_nais:String;
    email:string;
    mot_de_passe:string;
    type_user:string;
    constructor( id_user:number,
        prenom:string,
        nom:string,
        adresse:string,
        profession:string,
        telephone:string,
        sexe:string,
        date_nais:String,
        email:string,
        mot_de_passe:string,
        type_user:string){
            this.id_user=id_user,
            this.prenom=prenom,
            this.nom=nom,
            this.date_nais=date_nais,
            this.adresse=adresse,
            this.telephone=telephone,
            this.sexe=sexe,
            this.email=email,
            this.profession=profession,
            this.mot_de_passe=mot_de_passe,
            this.type_user=type_user
        }
}