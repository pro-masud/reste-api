import Book from "../models/Book.js";
import asynchandler from "express-async-handler";
import { createSlug } from "../helpers/helper.js";

export const BookTeam = asynchandler(async (req, res) =>{

    const {name} = req.body;

    const data = await Book.create({

        name,
        slug : createSlug(name),


    });

    res.status(200).json({message : `Hello ${data.name} Team Created Successful`});

});