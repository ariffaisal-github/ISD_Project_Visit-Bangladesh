const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.status(200).render("index", { pageTitle: "Homepage" });
});
app.get("/day_by_day", (req, res) => {
    res.status(200).render("day_by_day", { pageTitle: "Day by Day" });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});