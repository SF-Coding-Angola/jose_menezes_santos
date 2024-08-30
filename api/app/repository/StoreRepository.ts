import Store from "#models/store";
import db from "@adonisjs/lucid/services/db";
import { StoreDto } from "../dto/CreateStore.js";

export default class StoreRepository {
    public async save(data: StoreDto): Promise<Store> {
        return Store.create({
            store_name: data.name,
            rating: data.rating
        })
    }

    public async find(): Promise<Store[]> {
        return db.from('stores')
    }
}