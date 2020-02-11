export class HOMEEvent  {
   constructor(
     public type: string,
     public amount: number,
     public category: number,
     public date: string,
     public description: string,
     public id?: string, 
     public catName?: string
   ) {}
}