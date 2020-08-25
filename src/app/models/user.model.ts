export class UsersModel {
    public constructor(
        public name?: string,
        public bdMonth?: number,
        public phone?: string,
        public gift?: boolean,
        public drinks?: number,
        public usedGift?: number,
        public _id? : string,
        public _v? : number
        ) { }

}