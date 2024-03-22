import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload == 'up'){
                state.sort((a, b) => a.name.localeCompare(b.name))
            }else
            {
                state.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state// need to fix
        }
        case 'check': {

            return state.filter(el=>el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}

// export type todolistReducerType=removeTodoListACType
// export type removeTodoListACType=ReturnType<typeof removeTodolistAC>
// export const removeTodolistAC =(id:string)=>{
//     return{
//         type: 'REMOVE-TODOLIST',
//         payload:{id}
//     }as const
// }
