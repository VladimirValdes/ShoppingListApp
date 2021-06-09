export interface CategoryResponse {
    category: Category;
}

export interface Category {
    name: string;
    users: string[];
    cid:  string;
}
