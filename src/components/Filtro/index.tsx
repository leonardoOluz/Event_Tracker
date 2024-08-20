import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { IFiltrosDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtrosDeEventos } from '../../state/atom';

const Filtro: React.FC = () => {

  const [data, setData] = useState('')
  const [status, setStatus] = useState('ambos');
  const filtro: IFiltrosDeEventos = {};

  const setFiltrosDeEventos = useSetRecoilState<IFiltrosDeEventos>(filtrosDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    filtro.status = status;
    if (data) {
      filtro.data = new Date(data);
    } else {
      filtro.data = null;
    }
    setFiltrosDeEventos(filtro);
  };

  const handlechangeSelect = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(evento.target.value);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />
    <select value={status} onChange={handlechangeSelect} className={style.input}>
      <option autoFocus value="ambos">Todos eventos</option>
      <option value="completos">Eventos completos</option>
      <option value="incompletos">Eventos incompletos</option>
    </select>
    <button className={style.botao}>
      Filtrar
    </button>
  </form>)
};

export default Filtro;