import { RowDataPacket } from 'mysql2';

export default interface User extends RowDataPacket {
    id: number,
    full_name: string,
    email: string,
    roomnumber: number,
    user_password: string
}
