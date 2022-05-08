import { loginActions } from './loginActions';
import { loginReducer } from './loginReducer';
import { InitStateType } from './../../../../s-1-main/m-2-bll/initState';


let initState: InitStateType

describe('login test', ()=>{
    beforeEach(()=> {
        initState ={
            loading: false,
            success: false,
            error: '',
            
        }
    })
    test('error message set', () => {
        const endSate = loginReducer(initState, loginActions.setError('Error message'))
        expect (endSate.error).toBe('Error message')
    })

    test('loading is set to the correct value', ()=>{
        const endSate = loginReducer(initState, loginActions.setLoading(true))

        expect(endSate.loading).toBe(true)
    })

    test('logged is set to the correct value', ()=>{
        const endSate = loginReducer(initState, loginActions.setLogged(true))

        expect(endSate.success).toBeTruthy()
    })
})