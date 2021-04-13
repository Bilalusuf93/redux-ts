import { ActionType } from '../action-types';
import { Action } from "../actions";

interface IRepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialstate = {
    loading: false,
    error: null,
    data:[]
}

const reducer = (state: IRepositoriesState = initialstate, action: Action): IRepositoriesState => {
   
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIESSUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIESERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
};
export default reducer;