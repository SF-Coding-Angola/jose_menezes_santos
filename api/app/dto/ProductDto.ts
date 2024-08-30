export interface ProductDto {
    name: string,
    category: 'A' |'E' | 'C' | 'HG'  |'HB',
    price: number,
    quantity: number,
    store: number,
    photo?: string
}