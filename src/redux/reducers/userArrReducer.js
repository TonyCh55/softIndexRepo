export default function userArr(state = [], action) {
    switch(action.type) {

        case 'ADD': 
            return [...state, action.data]

        case 'DELETE':
            return state.filter(el => el.id !== action.id)

        case 'FIRST_NAME':
            let byFirstName = [...state].sort((a,b) => a.firstName > b.firstName)

            return byFirstName

        case 'LAST_NAME':
            let byLastName = [...state].sort((a,b) => a.lastName > b.lastName)

            return byLastName

        case 'PHONE':
            let byPhone = [...state].sort((a,b) => a.phone - b.phone)

            return byPhone
        
        case 'AGE':
            let byAge = [...state].sort((a,b) => a.age - b.age)

            return byAge
    

        default:
            return state
    }
}