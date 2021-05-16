export interface ProdxCatResponse {
    results: Result[];
}

export interface Result {
    cid:      string;
    category: string;
    products: Product[];
}

export interface Product {
    users:    string[];
    name:     string;
    category: string;
    pid:      string;
}
