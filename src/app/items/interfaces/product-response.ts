export interface ProductResponse {
    product: Product;
}

export interface Product {
    name:     string;
    category: string;
    user:     string;
    pid:      string;
}
