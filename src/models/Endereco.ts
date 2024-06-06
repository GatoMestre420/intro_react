import { Sign } from "crypto";

export interface Endereco{
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ativo: boolean;

}