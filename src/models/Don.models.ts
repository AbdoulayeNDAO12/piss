export class Don{
    id_don:number;
    montant:number;
    type:string;
    date_don: Date;
    constructor(id_don:number,montant:number,type:string,date_don: Date){
        this.id_don=id_don;
        this.montant=montant;
        this.type=type;
        this.date_don=date_don
    }
}