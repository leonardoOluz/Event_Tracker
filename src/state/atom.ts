import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrosDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [{
    "descricao": "Estudar React",
    "inicio": new Date("2024-08-17T09:00"),
    "fim": new Date("2024-08-17T15:00"),
    "completo": false,
    "id": 1642342747
  },
  {
    "descricao": "Estudar Recoil",
    "inicio": new Date("2024-08-18T09:00"),
    "fim": new Date("2024-08-18T11:00"),
    "completo": false,
    "id": 1642342959
  }]
})

export const filtrosDeEventos = atom<IFiltrosDeEventos>({
  key: 'filtrosDeEventos',
  default: {}
})