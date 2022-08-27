import { IAutomaticSub } from './IAutomaticSub';
import { IGameweekPick } from './IGameweekPick';
import { IEventData } from '../managerHistory';

export interface IManagerGameweekTeam {
    activeChip: string;
    automaticSubs: IAutomaticSub[];
    entryHistory: IEventData;
    picks: IGameweekPick[];
}
