import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

const server = http.createServer(
    async (req: http.IncomingMessage, res:http.ServerResponse) => {

        //queryString 
        const [baserURL, queryString] = req.url?.split("?") ?? ["", ""];


        // listar podcasts
        if(req.method === "GET" && baserURL === Routes.LIST) {
            await getListEpisodes(req, res);
        };

        if(req.method === "GET" && baserURL === Routes.EPISODE){
            await getFilterEpisodes(req, res);
        };
});

const port = process.env.PORT;


server.listen(process.env.PORT, ()=> {
    console.log(`servidor iniciado na porta ${port}`);
});

