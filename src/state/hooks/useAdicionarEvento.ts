import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"
import { obterId } from "../../utils/obterId";

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        const hoje = new Date();
        if (evento.inicio < hoje) {
            throw new Error("Data de início não pode ser anterior à data atual");
        }
        evento.id = obterId();
        return setListaDeEventos(listAntiga => [...listAntiga, evento])
    };
};

export default useAdicionarEvento;