export interface IBoxData {
    title: string,
    description: string,
    color:string
}

export interface IUser{
    id:number;
    name: string;
    email : string;
    age:number;
}

export interface IPokemon{
    
    name: string;
    url: string
}

export interface IPokeApi{
  count: number,
  next: string,
  previous: {},
  results: IPokemon[];
}

export type IUserDTO = Omit<IUser, "id">;
