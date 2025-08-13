export interface Book {
    ordinal: string
    title: string
}
export interface VolumeData {
    slug: string;
    title: string;
    description: string;
    books: Book[];
    cover: string;
    color: string;
}
