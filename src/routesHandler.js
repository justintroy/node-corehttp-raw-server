import { readdirSync } from "fs";

export const routesHandler = (targetPath) => {
    const files = readdirSync("./routes").filter((file) => file.endsWith(".js"));

    return new Promise(async (resolve, reject) => {
        for (const file of files) {
            const route = file === "root.js" ? "/" : "/" + file.slice(0, file.length - 3);

            if (route === targetPath) {
                const module = await import(`./routes/${file}`);
                resolve(module);
            }
        }
        reject(`No route was set for path '${targetPath}'`);
    });
};
