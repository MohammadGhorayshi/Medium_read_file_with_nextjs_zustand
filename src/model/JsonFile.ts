export interface JsonFile {
    name: string;
    age: number;
    city: string;
    description: DescriptionModel[]
};

export interface DescriptionModel {
    href: string;
    title: string;
    subTitle: string;
}