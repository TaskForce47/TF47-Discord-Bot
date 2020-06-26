export default interface Arma3Server{
    name: string,
    map: string,
    raw: {
        game: string
    }
    connect: string,
    ping: number,
    players: Array<Object>
    maxplayers: number,
    times: Array<string>
    names: Array<string>
}
