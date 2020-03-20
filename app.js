var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  // res.send("Root page")
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {
      name: "salmon creek",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftpwd.texas.gov%2Fstate-parks%2Feisenhower%2Ffees-facilities%2Fcampsites%2Fcampsite-elmpoint-gallery%2Feisenhower-sp-4500&imgrefurl=https%3A%2F%2Ftpwd.texas.gov%2Fstate-parks%2Feisenhower%2Ffees-facilities%2Fcampsites%2Fcampsites-developed-premium&tbnid=MHt2E5IMt71i2M&vet=12ahUKEwit8o3Bgp3oAhXGgZ4KHaesCekQMygWegQIARBb..i&docid=_naCGvSyUp7bQM&w=1200&h=797&q=campsite&ved=2ahUKEwit8o3Bgp3oAhXGgZ4KHaesCekQMygWegQIARBb"
    },
    {
      name: "granite hill",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nps.gov%2Fmora%2Fplanyourvisit%2Fimages%2FOhanaCampground2016_CMeleedy_01_web.jpeg%3Fmaxwidth%3D1200%26maxheight%3D1200%26autorotate%3Dfalse&imgrefurl=https%3A%2F%2Fwww.nps.gov%2Fmora%2Fplanyourvisit%2Fcampgrounds.htm&tbnid=C74t98_pEPv4WM&vet=12ahUKEwit8o3Bgp3oAhXGgZ4KHaesCekQMygQegUIARCxAg..i&docid=u9og_-aukXvt8M&w=960&h=491&q=campsite&ved=2ahUKEwit8o3Bgp3oAhXGgZ4KHaesCekQMygQegUIARCxAg"
    },
    {
      name: "mountaine goat's Rest",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbs8lqDN1a7VuhbV6GiLg9h3LBmwo9ODd_pwOTgrsyKsyqKPjk"
    }
  ];

  res.render("campgrounds", { campgrounds: campgrounds });
});
app.listen(3000, function() {
  console.log("The YelpCamp server has started");
});
   