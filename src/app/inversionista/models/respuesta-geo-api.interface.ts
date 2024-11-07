export interface DataPais {
    name: string,
    Iso2: string,
    Iso3: string
}

export interface RespuestaServicioPais {
    error: boolean;
    msg: string;
    data: DataPais[]; // Usa la interfaz Pais para tipar el arreglo
}

export interface RespuestaServicioCiudad {
    error: boolean;
    msg: string;
    data: string[]; // Usa la interfaz Pais para tipar el arreglo
}