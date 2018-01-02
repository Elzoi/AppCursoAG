import { User } from "./user.model";
import { DataTransferObject } from "./data-transfer-object.model";

export class Atestado extends DataTransferObject{
    public data: Date
    public dias: number
    public cid: string
    public funcionario: User
}