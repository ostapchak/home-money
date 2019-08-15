export class User{
    constructor(
        public email: string,
        public passwor: string,
        public name: string,
        public id?: number
    ) {}
}