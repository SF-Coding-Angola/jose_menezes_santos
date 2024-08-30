import vine from '@vinejs/vine'

export const ProductValidator = vine.compile(
    vine.object({
        name: vine.string(),
        category: vine.enum(['A','E','C','HG','HB']),
        quantity: vine.number(),
        price: vine.number(),
        store: vine.number()
    })
)