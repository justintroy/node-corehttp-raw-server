//Render Page
export default (req, res) => {
    res.write("<html>");
    res.write("<h1>Users</h1>");
    res.write("<ul><li>User 1</li></ul>");
    res.write("</html>");
    res.end();
};
