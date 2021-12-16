import { routesHandler } from "./routesHandler.js";

export const requestHandler = async (req, res) => {
    const url = req.url;

    try {
        const module = await routesHandler(url);
        module.default(req, res);
    } catch (error) {
        console.log(error);
    }
};
