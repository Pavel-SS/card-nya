import { InferActionType } from '../../../s-1-main/m-2-bll/action';
import { UserType } from '../p-3-api/profileAPI';

export const profileActions = {
    setEdit: (editMode:boolean) => 
        ({type: 'profile/SET_EDIT', payload: {editMode}} as const),
    setObtain: (isFetching: boolean) => 
        ({type: 'profile/SET_OBTAIN', payload:{isFetching}} as const),
    setUserData: (user: UserType) => 
        ({type: 'profile/SET_USER_DATA', payload:{user}} as const),
    setInitialize: (initialize: boolean) => 
        ({type: 'profile/SET_INITIALIZE', payload: {initialize}} as const)
};

export type ProfileActionsType = InferActionType<typeof profileActions>;
