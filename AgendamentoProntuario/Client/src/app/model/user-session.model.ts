import { DataTransferObject } from './data-transfer-object.model'

export class UserSession extends DataTransferObject{
    public id: number
    public cpf: string
    public nome: string
    public sessionToken: string
}