import rootReducer from 'src/reducers';
import { StateType } from 'typesafe-actions';

type RootState = StateType<typeof rootReducer>;
export default RootState;
