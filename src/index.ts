export type { IManagerTransfer } from './endpoints/managerTransfer/IManagerTransfer';
export type { IGameweekSummary } from './custom/gameweekSummary/IGameweekSummary';
export type { IStatusDetails, IEventStatus } from './endpoints/eventStatus';
export type { IFixture, IData, IStat } from './endpoints/fixtures';
export type { IDreamTeam } from './endpoints/dreamTeam/IDreamTeam';

export type {
    IBootstrapStatic,
    IGameSettings,
    IElementStat,
    IElementType,
    IElement,
    IEvent,
    IPhase,
    ITeam
} from './endpoints/bootstrapStatic';

export type {
    IPlayerGameweekExplain,
    IPlayerGameweekStats,
    IPlayerGameweekData,
    IGameweekStats
} from './endpoints/liveEvent';

export type {
    IManagerInformation,
    IManagerLeagues,
    ICupInformation,
    IClassicLeague
} from './endpoints/managerInformation';

export type {
    IElementSummary,
    IElementHistory,
    IFutureFixture,
    IPreviousSeasonScores
} from './endpoints/elementSummary';

export type {
    IManagerGameweekTeam,
    IGameweekPick,
    IAutomaticSub
} from './endpoints/managerGameweekTeam';

export type {
    IManagerHistory,
    IPreviousSeason,
    IEventData
} from './endpoints/managerHistory';

export type {
    ITeamInformation,
    ISetPieceNotes,
    INote
} from './endpoints/setPieceNotes';
