// "use server"
// import fs from "fs/promises"
// import path from "path"
// export async function uploadFile(formData){
//     const file = formData.get("file");
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const filePath = path.join("uploads", file.name);
//     await fs.writeFile(filePath, buffer)
//     return "File uploaded SuccessFully";
// }




// setlikes question
import React, { useState } from "react";
function LikeButton() {
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={handleLike}>
        Like
      </button>
    </div>
  );
}
export default LikeButton;







const express = require("express");
const app = express();
let isAuthenticated = false;
function checkAuth(req, res, next) {
    if (isAuthenticated) {
        next();
    } else {
        res.redirect("/login");
    }
}
app.get("/login", (req, res) => {
    res.send("Please Login First");
});
app.get("/dashboard", checkAuth, (req, res) => {
    res.send("Welcome to Dashboard");
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});