export interface CategoriesResponse {
    categories: Category[];
}

export interface Category {
    users: string[];
    name:  string;
    cid:   string;
}