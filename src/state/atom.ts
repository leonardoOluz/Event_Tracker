import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrosDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [{
    "descricao": "Estudar React",
    "inicio": new Date("2024-08-19T09:00"),
    "fim": new Date("2024-08-19T15:00"),
    "completo": true,
    "id": 1642342747
  },
  {
    "descricao": "Estudar Recoil",
    "inicio": new Date("2024-08-20T09:00"),
    "fim": new Date("2024-08-20T11:00"),
    "completo": false,
    "id": 1642342959
  },
  {
    "descricao": "Estudar TypeScrypt",
    "inicio": new Date("2024-08-21T09:00"),
    "fim": new Date("2024-08-21T11:00"),
    "completo": false,
    "id": 1642342960
  },{
    "descricao": "Estudar Styled Components",
    "inicio": new Date("2024-08-22T09:00"),
    "fim": new Date("2024-08-22T11:00"),
    "completo": false,
    "id": 1642342961
  }]
})

export const filtrosDeEventos = atom<IFiltrosDeEventos>({
  key: 'filtrosDeEventos',
  default: {}
})