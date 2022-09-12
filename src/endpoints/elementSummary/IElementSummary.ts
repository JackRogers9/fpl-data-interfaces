import { IElementHistory } from './IElementHistory';
import { IFutureFixture } from './IFutureFixture';
import { IPastScores } from './IPastScores';

export interface IElementSummary {
    fixtures: IFutureFixture[];
    history: IElementHistory[];
    historyPast: IPastScores[];
}
