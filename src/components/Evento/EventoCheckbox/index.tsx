import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../state/atom';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const aoAlterarStatus = (): void => {
    let eventoAlterado:IEvento = {
      ...evento
    };
    
    eventoAlterado.completo = !eventoAlterado.completo

    setListaEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(evt => evt.id === evento.id)
      return [...listaAntiga.slice(0, indice), eventoAlterado, ...listaAntiga.slice(indice + 1)]
    })

  }

  return (<i className={estilos.join(' ')} onClick={aoAlterarStatus}></i>)
}

export default EventoCheckbox