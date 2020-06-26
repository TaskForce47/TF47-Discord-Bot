import {ConnectionManager} from "typeorm";
import {Warns} from "../models/Warns";
import {dbName} from "../Config";
import {WorkshopItems} from "../models/WorkshopItems";

const connectionManager: ConnectionManager = new ConnectionManager();
connectionManager.create({
    name: dbName,
    type: "sqlite",
    database: "./db.sqlite",
    entities: [
        Warns,
        WorkshopItems
    ]
});

export default connectionManager;
