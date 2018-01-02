import { DataTransferObject } from "./data-transfer-object.model";

export class Agenda extends DataTransferObject{
    public id: number
    public dataDisponivel: Date
    public hora: string
    public diaSemana: string
    public medico: string
    public selecionada: boolean = false
}