export class Parrain{
    id_parrain:number;
    id_donneur:number;
    id_compte:number;

    constructor( id_parrain:number,
        id_donneur:number,
        id_compte:number){
            this.id_parrain=id_parrain,
            this.id_donneur=id_donneur,
            this.id_compte=id_compte
        }
}