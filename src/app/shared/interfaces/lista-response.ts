export interface ListResponse {
    cid:      string;
    category: string;
    products: Product[];
}

export interface Product {
    pid:      string;
    name:     string;
    cantidad: number;
}

