export interface IGameSettings {
    leagueJoinPrivateMax: number;
    leagueJoinPublicMax: number;
    leagueMaxSizePublicClassic: number;
    leagueMaxSizePublicH2h: number;
    leagueMaxSizePrivateH2h: number;
    leagueMaxKoRoundsPrivateH2h: number;
    leaguePrefixPublic: string;
    leaguePointsH2hWin: number;
    leaguePointsH2hLose: number;
    leaguePointsH2hDraw: number;
    leagueKoFirstInsteadOfRandom: boolean;
    cupStartEventId: string;
    cupStopEventId: string;
    cupQualifyingMethod: string;
    cupType: string;
    squadSquadplay: number;
    squadSquadsize: number;
    squadTeamLimit: number;
    squadTotalSpend: number;
    uiCurrencyMultiplier: number;
    uiUseSpecialShirts: boolean;
    uiSpecialShirtExclusions: string[];
    statsFormDays: number;
    sysViceCaptainEnabled: boolean;
    transfersCap: number;
    transfersSellOnFee: number;
    leagueH2hTiebreakStats: string[];
    timezone: string;
}
