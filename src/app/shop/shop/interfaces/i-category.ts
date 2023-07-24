import { ISpecification } from "./i-specification";

export interface ICategory {
    id: number;
    name: string;
    specifications: ISpecification[];
}

