import { IAutomaticSub } from '../../endpoints/managerGameweekTeam';
import { IEventData } from '../../endpoints/managerHistory';
import { IPlayerStats } from './IPlayerStats';

export interface ITeamStats {
    automaticSubs: IAutomaticSub[];
    entryHistory: IEventData;
    playerStats: IPlayerStats[];
    activeChip: string;
}
