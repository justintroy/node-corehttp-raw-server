export const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(url, method);
};
