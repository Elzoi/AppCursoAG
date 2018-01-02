import { Atestado } from "./atestado.model";
import { DataTransferObject } from "./data-transfer-object.model";

export class Agendamento extends DataTransferObject{
    public data: Date
    public atestado: Atestado
}