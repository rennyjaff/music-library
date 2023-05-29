const express = require("express");
const { createArtist, getAllArtists } = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.route("/").post(createArtist).get(getAllArtists);

module.exports = artistRouter;
