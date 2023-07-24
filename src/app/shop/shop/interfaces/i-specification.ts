export interface ISpecification {
    id: number;
    name: string;
    values: ISpecificationValue[];
}

export interface ISpecificationValue {
    id: number;
    value: string;
}
