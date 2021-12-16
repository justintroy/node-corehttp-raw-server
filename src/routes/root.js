//Render Page
export default (req, res) => {
    res.write("<html>");
    res.write("<h1>Hello and welcome po!</h1>");
    res.write("<h4><a href='/users'>Go to Users</a></h4>");
    res.write("<body><form action='/users' method='POST'>");
    res.write("<input type='text' name='message'><button type='submit'>Submit</button>");
    res.write("</body></form>");
    res.write("</html>");
    res.end();
};
