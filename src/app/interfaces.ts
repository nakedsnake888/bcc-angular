//Interfaccia per le Credenziali.

export interface Credentials {
    username: string,
    password: string
};

//Interfaccia per le Filiali.
export interface Filiale {
    id: number,
    nome: string,
    codice: number,
    cab: string,
    lastModify: string
}

//Interfaccia per il Cliente.
export interface Cliente {
    id: number,
    nag: string,
    cab: string,
    nome: string,
    confermato: boolean,
    dataNascita: Date,
    telefono: string,
    email: string,
    p1: boolean,
    p2: boolean,
    p3: boolean,
    p4: boolean,
    p5: boolean,
    p6: boolean,
    p7: boolean,
    firma: boolean,
    codice: string,
    lastModify: Date
};

//Interfaccia per Cliente-Modified.
export interface Modified {
    id: number,
    p1: boolean,
    p2: boolean,
    p3: boolean,
    p4: boolean,
    p5: boolean,
    p6: boolean,
    firma: boolean,
    telefono: boolean,
    email: boolean
}