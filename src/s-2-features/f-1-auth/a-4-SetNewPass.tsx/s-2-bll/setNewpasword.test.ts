import { setNewPasswordAction } from './setNewPasswordAction';
import { setNewPasswordReducer } from './setNewPasswordReducer';
import { InitStateType } from "../../../../s-1-main/m-2-bll/initState";


let initState: InitStateType

describe('change pasword test', () => {
    beforeEach(()=>{
        initState = {
            loading: false,
            success: false,
            error: ''
        }
    })

    test('error message set', () => {
        const endState = setNewPasswordReducer(initState, setNewPasswordAction.setError('Error message'))

        expect(endState.error).toBe('Error message')
    })

    test('loading is set to the correct value', () => {
        const endState = setNewPasswordReducer(initState, setNewPasswordAction.setLoading(true))

        expect(endState.loading).toBe(true)
    })

    test('correct redirect value should be set', () => {
        const endState = setNewPasswordReducer(initState, setNewPasswordAction.setSucccess(true))

        expect(endState.success).toBe(true)
    })
})