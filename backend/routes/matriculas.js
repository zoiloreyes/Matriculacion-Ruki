const express = require("express"),
      router = express.Router(),
      {Matriculas} = require("../models");

router.get("/", (req, res, next) => {
   Matriculas.find({})
      .then(matriculas => res.status(200).json(matriculas))
      .catch(error => next(error))
})

router.post("/", (req, res, next) => {
   Matriculas.create(req.body)
      .then(newMatricula => res.status(201).json(newMatricula))
      .catch(error => {
         error.status = 400;
         next(error);
      })
})

router.get("/:id", (req, res, next) => {
   Matriculas.findOne({_id: req.params.id})
      .then(matricula => {
         if(!matricula) throw new Error("Not Found");
         return res.status(200).json(matricula)
      })
      .catch(error => next(error))
})

router.patch("/:id", (req, res, next) => {
   Matriculas.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedMatricula => res.status(200).json(updatedMatricula))
      .catch(error => {
         error.status = 409;
         next(error);
      })
})

router.delete("/:id", (req, res, next) => {
   Matriculas.findByIdAndRemove(req.params.id)
      .then(deletedMatricula => res.status(200).json(deletedMatricula))
      .catch(error => next(error))
})

module.exports = router;