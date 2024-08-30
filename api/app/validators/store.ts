import vine from '@vinejs/vine'


export const StoreValidator = vine.compile(
    vine.object({
        name: vine.string(),
        rating: vine.number()
    })
)