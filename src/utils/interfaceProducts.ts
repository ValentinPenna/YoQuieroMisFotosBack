export default interface IProduct {
    id?: string;
    name: string;
    price: number;
    description: string;
    photosNumber: number;
    slug: string;
    photos?: string[]
}