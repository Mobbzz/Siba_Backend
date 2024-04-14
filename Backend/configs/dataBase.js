const mongoose = require("mongoose");

const dataBaseConnection = mongoose.connect(
  ``
);

module.exports = {
  dataBaseConnection,
};



// {
//   "name": "Dyson V10 10 10 e",
//   "price": 6690,
//   "description": "Dyson Cyclone V10 Absolute-dammsugaren kommer med upp till 60 minuter av kraftfull ihållande sugeffekt.¹ Dysons senaste antitrassel-teknologi rengör automatiskt borstvalsen från hår som fastnat.",
//   "category": "dammsugare",
//   "images": [
//     "https://www.komplett.se/img/p/1080/1213986.jpg",
//     "https://www.komplett.se/img/p/1080/1213986_2.jpg",
//     "https://www.komplett.se/img/p/1080/1213986_6.jpg"
//   ]
// }