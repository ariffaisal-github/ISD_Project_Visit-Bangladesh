const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.status(200).render("index", { pageTitle: "Homepage" });
});
app.get("/day_by_day", (req, res) => {
    touristSpots = [
        {
            date: "26/12/2021",
            name: "Jaflong",
            location: "Sylhet",
            description: "Jaflong  is a hill station and tourist spot in the Division of Sylhet, Bangladesh. It is located in the Gowainghat upazila of Sylhet District, about 3 kilometres (1.9 mi) from the town of Gowainghat. The name Jaflong is derived from the word Jaintia, a tribe of the Khasi people who live in the area. The hill station is located in the Khasia Hills, a mountain range in the northeastern part of Bangladesh. The hill station is located in the Khasia Hills, a mountain range in the northeastern part of Bangladesh.",
            // image: "https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image011-1024x686.jpg"
        },
     
        {
            date: "28/12/2021",
            name: "Taman Sari",
            location: "Yogyakarta",
            description: "Taman Sari is a water castle in Yogyakarta, Indonesia. It is located in the southern part of the city, near the Kraton, the Sultan's palace. The name Taman Sari means 'Royal Garden' in the Javanese language. The garden was built in the 18th century by the Sultan Hamengkubuwono I, and was used as a place for the Sultan and his family to relax and entertain guests. The garden was built in the style of a traditional Javanese water garden, with a series of pools and canals. The garden was used as a place for the Sultan and his family to relax and entertain guests. The garden was built in the style of a traditional Javanese water garden, with a series of pools and canals.",
            // image: "https://www.worldatlas.com/r/w1200/upload/5c/36/ae/shutterstock-1014644104.jpg"
        },
        {
            date: "29/12/2021",
            name: "Bromo",
            location: "Malang",
            description: "Mount Bromo is an active volcano and part of the Tengger massif, in East Java, Indonesia. At 2,329 metres (7,641 ft) it is not the highest peak of the massif, but is the most well known. The massif area is one of the most visited tourist attractions in East Java, Indonesia. Bromo stands in the middle of a vast plain called the 'Sea of Sand', a large expanse of volcanic sand dunes covering an area of 10 square kilometres (3.9 sq mi).",
            // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Borobudur_2010-10-16.jpg/1200px-Borobudur_2010-10-16.jpg",
        },
    ];
    res.status(200).render("day_by_day", { pageTitle: "Day by Day", touristSpots });
    // res.status(200).render("day_by_day", { pageTitle: "Day by Day" });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});