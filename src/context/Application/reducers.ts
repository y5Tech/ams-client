export default function Reducers(state: any, action: any) {
    switch (action.type) {
        case "SET":
            return {
                locale: action.locale
            }
        default:
            return state
    }
}