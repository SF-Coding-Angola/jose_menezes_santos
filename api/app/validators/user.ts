import vine from '@vinejs/vine'


export const CreateUserValidator = vine.compile(
    vine.object({
        fullName: vine.string(),
        username: vine.string(),
        password: vine.string().minLength(6)
    })
)

export const LoginValidator = vine.compile(
    vine.object({
        username: vine.string(),
        password: vine.string()
    })
)