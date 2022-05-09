import { InferActionType } from '../../../s-1-main/m-2-bll/action';
import { UserType } from '../p-3-api/profileAPI';

export const profileActions = {
    setEdit: (edit:boolean) => 
        ({type: 'profile/SET_EDIT', payload: {edit}} as const),
    setObtain: (obtain: boolean) => 
        ({type: 'profile/SET_OBTAIN', payload:{obtain}} as const),
    setUserData: (user: UserType) => 
        ({type: 'profile/SET_USER_DATA', payload:{user}} as const),
    setInitialize: (initialize: boolean) => 
        ({type: 'profile/SET_INITIALIZE', payload: {initialize}} as const)
};

export type ProfileActionsType = InferActionType<typeof profileActions>;
