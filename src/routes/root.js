//Render Page
export default (req, res) => {
    res.write("<html>");
    res.write("<h1>Hello and welcome po!</h1>");
    res.write("<h4><a href='/users'>Go to Users</a></h4>");
    res.write("</html>");
    res.end();
};
