export interface NewHotelType {

    description?: string
    feature?: string;
    id?: string;
    imgSource?: string;
    perNight?: string;
    stars?: string;
    title?: string;
    address?: string;
    email?: string;
    displayName?: string;
}

//without id
export interface AddHotelType {
    description: string
    feature: string;
    imgSource: string;
    perNight: string;
    stars: string;
    title: string;
    address: string;
    email: string;
    displayName: string;
}
