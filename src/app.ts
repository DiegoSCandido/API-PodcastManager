import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response:http.ServerResponse) => {

    //queryString 
    const baserURL = request.url?.split("?")[0];


    // listar podcasts
    if(request.method === HttpMethod.GET && baserURL === Routes.LIST) {
        await getListEpisodes(request, response);
    };

    if(request.method === HttpMethod.GET && baserURL === Routes.EPISODE){
        await getFilterEpisodes(request, response);
    };
}