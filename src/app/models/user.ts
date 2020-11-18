export class User{
    constructor(
        public name:string,
        public email:string,
        public topic:string,
        public mobile:number,
        public shift:string,
        public subscribe:boolean
    ){}
}