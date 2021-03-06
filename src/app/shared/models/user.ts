export interface User {
    id: number;
    address?: string;
    wallet?: number;
    postalCode?: string;
    registrationDate: string;
    email: string;
    isLunchLady?: boolean;
    name: string;
    firstname: string;
    phone?: string;
    town?: string;
    sex?: number;
    status: number;
    imageId?: number;
    password: string;
}

export interface Credentials {
    email: string,
    password: string,
}
