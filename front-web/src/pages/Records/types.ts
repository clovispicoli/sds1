

export type RecordsResponse = {
    content: RecordIem[];
    totalPages: number;
}

export type RecordIem = {
    id: number;
    moment: string;
    name: PerformanceResourceTiming;
    age: number;
    gameTitle: string;
    gamePlatform: Platform,
    genreName: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';