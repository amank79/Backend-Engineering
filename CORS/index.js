const app = require("express")();

app.get("/", (req, res) => {
  // Set Access-Control-Allow-Origin header to allow requests from a particular origin
  //   res.setHeader("Access-Control-Allow-Origin", "https://google.com");

  // Set Access-Control-Allow-Origin header to allow requests from all origins
  res.setHeader("Access-Control-Allow-Origin", "*");

  //Send the text response
  res.send("Response Sent from the server");
});

app.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
