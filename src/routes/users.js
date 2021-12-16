//Render Page
export default (req, res) => {
    if (req.method === "POST") {
        const body = [];
        req.on("data", (chunks) => {
            body.push(chunks);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
    }

    res.write("<html>");
    res.write("<h1>Users</h1>");
    res.write("<ul><li>User 1</li></ul>");
    res.write("</html>");
    res.end();
};
