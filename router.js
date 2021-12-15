import { routesHandler } from "./routesHandler.js";

export const requestHandler = async (req, res) => {
    const url = req.url;
    const method = req.method;

    try {
        const module = await routesHandler(url);
        module.default(req, res);
    } catch (error) {
        console.log(err);
    }
};
