import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrosDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: eventosAsync
})

export const filtrosDeEventos = atom<IFiltrosDeEventos>({
  key: 'filtrosDeEventos',
  default: {}
})