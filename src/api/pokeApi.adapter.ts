import axios from "axios";

export interface HttpAdapter {

    get<T>( url: string ): Promise<T>;

}

export class PokeApiFetchAdapter implements HttpAdapter {

    async get<T>( url: string ): Promise<T> {
        const resp = await fetch(url)
        const data: T = await resp.json();
        console.log('Con fetch');
        return data;
    }

}


export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    // <T> (genérico)
    async get<T>( url: string ): Promise<T> {
        const { data } = await this.axios.get<T>( url );
        console.log('Con axios');
        return data;
    }

    async post( url: string, payload: any ) {

    }

    async patch( url: string, payload: any ) {

    }
    async delete( url: string ) {

    }

}