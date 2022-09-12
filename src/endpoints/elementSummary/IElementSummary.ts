import { IPreviousSeasonScores } from './IPreviousSeasonScores';
import { IElementHistory } from './IElementHistory';
import { IFutureFixture } from './IFutureFixture';

export interface IElementSummary {
    fixtures: IFutureFixture[];
    history: IElementHistory[];
    historyPast: IPreviousSeasonScores[];
}
