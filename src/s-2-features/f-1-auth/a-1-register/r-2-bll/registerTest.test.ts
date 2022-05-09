import { registerActions } from './RegisterActions';
import { registerReducer } from './registerReducer';
import { InitStateType } from '../../../../s-1-main/m-2-bll/initState';



let initState: InitStateType

describe('registration test', () => {
    beforeEach(() => {
        initState = {
            loading: false,
            success: false,
            error: ''
        }
    })

    test('error message set', () => {
        const endState = registerReducer(initState, registerActions.setError('Error message'))

        expect(endState.error).toBe('Error message')
    })

    test('loading is set to the correct value', () => {
        const endState = registerReducer(initState, registerActions.setLoading(true))

        expect(endState.loading).toBeTruthy()
    })

    test('correct redirect value should be set', () => {
        const endState = registerReducer(initState, registerActions.setSucccess(true))

        expect(endState.success).toBeTruthy()
    })
})