const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const users = require('../../models/UserModels/user.model');
const config = require("../../config");


export const getUsers =  async (req, res) => {
    await users.find().then(data => res.send(data));
}