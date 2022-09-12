export interface IFutureFixture {
    id: number;
    code: number;
    teamH: number;
    teamHScore: string;
    teamA: number;
    teamAScore: string;
    event: number;
    finished: boolean;
    minutes: number;
    provisionalStartTime: boolean;
    kickoffTime: string;
    eventName: string;
    isHome: boolean;
    difficulty: number;
}
