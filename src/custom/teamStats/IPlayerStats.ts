export interface IPlayerStats {
    id: number;
    webName: string;
    firstName: string;
    secondName: string;
    wasHome: boolean;
    totalPoints: number;
    teamName: string;
    teamShortName: string;
    oppositionName: string;
    oppositionShortName: string;
    positionShortName: string;
    position: number;
    isCaptain: boolean;
    isViceCaptain: boolean;
    kitImage?: any;
}
