import { Express } from "express";
import {
    createSessionHandler, 
    getSessionHandler,
    deleteSessionHandler } from './controller/session.controller'
import { requireUser } from "./middleware/requireUser";

function routes(app: Express){

    app.post('/api/session', createSessionHandler)
    app.get('/api/session', requireUser, getSessionHandler)
    app.delete('api/session', requireUser, deleteSessionHandler)

}


export default routes;