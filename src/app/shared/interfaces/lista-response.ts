export interface ListResponse {
    category: string;
    products: Product[];
}

export interface Product {
    name: string;
    id: string;
    cantidad: number;
}
