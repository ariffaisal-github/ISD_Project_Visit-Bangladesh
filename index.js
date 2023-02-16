const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.status(200).render("index", { pageTitle: "Homepage" });
});
app.get("/day_by_day", (req, res) => {
    res.status(200).render("day_by_day", { pageTitle: "Day by Day" });
});

app.post("/location_entered", (req, res) => {
    console.log(req.body); // access the form data using the 'name' attribute of the input field
    res.redirect("/day_by_day"); // redirect to another page
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});