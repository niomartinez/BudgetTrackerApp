export interface Income {
    id: string;
    source: Source
    date: Date;
    amount: number;
}

export interface Source {
    id: string;
    name: string;
}