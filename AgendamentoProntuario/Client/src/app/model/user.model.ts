import { DataTransferObject } from './data-transfer-object.model';

export class User extends DataTransferObject{
    public cpf: string
    public matricula: string
    public nome: string
}