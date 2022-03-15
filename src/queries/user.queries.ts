export const UserQueries = {

    GetUserByEmail: `
        SELECT * FROM Users WHERE email=?
    `

}