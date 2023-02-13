type ImageLinksType = {
    smallThumbnail: string;
    thumbnail: string;
}

type VolumeInfoType = {
    authors: Array<string>;
    categories: Array<string>;
    imageLinks: ImageLinksType;
    title: string;
}

type FormatType = {
    isAvailable: boolean;
}

type AccessInfoType = {
    epub: FormatType;
    pdf: FormatType;

}

type ListPriceType = {
    amount: number;
    currencyCode: string;
}

type SaleInfoType = {
    listPrice: ListPriceType;
    saleability: "FOR_SALE" | "NOT_FOR_SALE";
}

export interface BooksModel {
    id: string;
    etag: string;
    volumeInfo: VolumeInfoType;
    accessInfo: AccessInfoType;
    saleInfo: SaleInfoType;
}