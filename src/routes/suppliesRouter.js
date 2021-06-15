import e from "express"
import express from "express"

import Supply from "../models/Supply.js"

const suppliesRouter = new express.Router()
let emptyForm = false

suppliesRouter.get("/", (req, res) => {
  console.log(emptyForm)
  res.render("index", { supplies: Supply.findAll(), emptyForm })
  debugger
})

suppliesRouter.post("/", (req, res) => {
  const supplyName = req.body.item
  if (supplyName.trim()) {
    const newSupply = new Supply({ supplyName })
    newSupply.save()
    res.redirect("/supplies")
  } else {
    emptyForm = true
    res.render("index", { supplies: Supply.findAll(), emptyForm })
  }
})

export default suppliesRouter