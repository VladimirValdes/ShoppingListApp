export interface ProductResponse {
    product: Product;
}

export interface Product {
    users:    string[];
    name:     string;
    category: Category;
    description: string;
    pid:      string;
}

export interface Category {
    _id:  string;
    name: string;
}

export class ProductObj implements Product {
    users: string[] = [];
    name = '';
    category: Category = {
        _id: '',
        name: ''
    };
    description = '';
    pid = '';
}

