import {User} from "./User.model"
import {Complex} from "./Complex.model"
import {Apartment} from './Apartment.model'
export interface Building {
    complexId: number;
    managerId: number | null;
    buildingNumber: string;
    floorCount: number;
    apartmentCount: number;
    manager: User;
    complex: Complex;
    apartments: Apartment[];
}