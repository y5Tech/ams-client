export default function Reducers(state: any, action: {payload:any,type:string}) {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                locale: action.payload.locale
            }
        default:
            return state
    }
}