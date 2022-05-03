import { useReducer } from 'react';
import { useEffect} from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    nombre: string;
}

const initialState: AuthState ={
    validando: true,
    token: null,
    userName: '',
    nombre: ''
}

type loginPayload = {
    userName: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout'}
    | { type: 'login', payload:  loginPayload }

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                userName: '',
                nombre: ''
            }
        case 'login':
            const {nombre, userName} = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                userName,
                nombre
            }
            
    
        default:
            return state;
            
    }
}

const Login = () => {

  const [state, dispatch] = useReducer(AuthReducer, initialState) ;

  useEffect(() => {
    setTimeout(() => {
        dispatch({type: 'logout'});
    }, 1500);
  }, [])

  const login = () => {
      dispatch({
          type: 'login',
          payload: {
              nombre: 'Moshe',
              userName: 'elMoises'
          }
      })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }
  
  if (state.validando){
      return (
          <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validando...
            </div>
          </>
      )
  }

  return (
    <div>
        {(state.token) ? 
        <div className="alert alert-success"> Autenticado como {state.nombre} </div>
        :
        <div className="alert alert-danger"> No autenticado</div>
        }

        {(state.token) ? 
         <button className="btn btn-danger" onClick={ logout }>
            Logout
        </button>
        :
        <button className="btn btn-primary m-2" onClick={ login }>
            Login
        </button>
        }
    </div>
  )
}

export default Login