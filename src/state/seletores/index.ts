import { selector } from "recoil";
import { filtrosDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtrosDeEventos)
        const todosOsEventos = get(listaDeEventosState)
        let eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true
            }
            const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
            return ehOMesmoDia;
        });

        eventos = eventos.filter(evento => {
            if (filtro.status === 'completos') {
                return evento.completo === true;
            }
            if (filtro.status === 'incompletos') {
                return evento.completo === false;
            }
            return evento;
        });

        return eventos
    }
});