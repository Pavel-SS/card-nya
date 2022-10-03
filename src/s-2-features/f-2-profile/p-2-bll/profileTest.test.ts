
import { InitProfileStateType } from './../../../s-1-main/m-2-bll/initState';
import { profileActions } from './profileActions';
import { profileReducer } from './profileReducer';

let initState: InitProfileStateType;

describe('profile reducer test', () => {
    beforeEach (() => {
        initState = {
            user: {
                _id: '212',
                email: 'test@post.by',
                name: 'Dante',
                avatar: 'img',
                publicCardPacksCount: 0,
                created: new Date(),
                updated: new Date(),
                isAdmin: false,
                verified: false,
                rememberMe: false
            },
            editMode: false,
            obtain: false,
            initialize: false
        }
    })
    test ('authorization user', () => {
        const userTest = {
                _id: '22',
                email: 'test2@post.by',
                name: 'Petrarca',
                avatar: 'img',
                publicCardPacksCount: 1,
                created: new Date(),
                updated: new Date(),
                isAdmin: false,
                verified: false,
                rememberMe: false
        }

        const endSate = profileReducer(initState, profileActions.setUserData(userTest))

        expect(endSate.user._id).toBe('22')
        expect(endSate.user.name).toBe('Petrarca')
    })
    test ('change user', () => {
        const endSate = profileReducer(initState, profileActions.setEdit(true))
        const endSate2 = profileReducer(initState, profileActions.setEdit(false))

        expect(endSate.editMode).toBe(true)
        expect(endSate2.editMode).toBe(false)
    })
    test ('is obtein to show preloader or not', () => {
        const endSate = profileReducer(initState, profileActions.setObtain(true))
        const endSate2 = profileReducer(initState, profileActions.setObtain(false))

        expect(endSate.obtain).toBe(true)
        expect(endSate2.obtain).toBe(false)
    })
    test ('is initialize or not', () => {
        const endSate = profileReducer(initState, profileActions.setInitialize(true))

        expect(endSate.initialize).toBe(true)
    })
})