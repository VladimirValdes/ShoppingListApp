export interface CategoriesResponse {
    categories: Category[];
}

export interface Category {
    name: string;
    user: string;
    cid:  string;
}
