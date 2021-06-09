export interface ShopListResponse {
    shopListUser: ShopListUser;
}

export interface ShopListUser {
    complete: boolean;
    cancel:   boolean;
    name:     string;
    user:     string;
    list:     List[];
    id:       string;
}

export interface List {
    _id:      string;
    category: Category;
    products: Product[];
}

export interface Category {
    _id:  string;
    name: string;
}

export interface Product {
    quantity:  number;
    purchased: boolean;
    _id:       string;
    product:   InfoProduct;
}


export interface InfoProduct {
    _id:  string;
    name: string;
}

export interface ListResponse {
    id:  string;
    msg: string;
}
