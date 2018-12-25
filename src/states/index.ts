import rootReducer from '@reducers';
import { StateType } from 'typesafe-actions';

type RootState = StateType<typeof rootReducer>;
export default RootState;
