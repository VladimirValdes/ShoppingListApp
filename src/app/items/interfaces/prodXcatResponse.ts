export interface ProdxCatResponse {
    results: Result[];
}

export interface Result {
    category: string;
    products: Product[];
}

export interface Product {
    name:     string;
    category: string;
    user:     string;
    pid:      string;
}
