export const erroresFirebase = (code) =>{
    switch (code) {
        case "auth/email-already-in-use":
           return {
            code: 'email',
            message: 'usuario ya registrado'
           }
        case "auth/invalid-email":
           return {
            code: 'email',
            message: 'Formato email no valido'
           }
        case 'auth/user-not-found':
         return {
            code: 'email',
            message: 'Usuario no registrado'
           }
        case 'auth/wrong-password':
         return {
            code: 'password',
            message: 'Contraseña incorrecto'
           }
        default:
         return {
            code: 'email',
            message: 'ocurrio un error en el server'
           }
    }
}