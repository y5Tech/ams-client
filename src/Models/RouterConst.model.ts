import { ReactNode } from "react"

export default interface RouterModel{
    id:string  | number
    route:string
    icon:ReactNode | null
    text:ReactNode| string
    children:Array<RouterModel>

}

