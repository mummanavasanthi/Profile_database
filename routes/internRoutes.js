const express = require("express");
const router = express.Router();
const Intern = require("../models/Intern");
router.post("/", async (req, res) => {
    try {
        const intern = await Intern.create(req.body);
        res.status(201).json(intern);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get("/", async (req, res) => {
    try {
        const interns = await Intern.find();
        res.json(interns);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get("/search/name/:name", async (req, res) => {
    try {
        const interns = await Intern.find({
            name: { $regex: req.params.name, $options: "i" }
        });

        res.json(interns);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id);
        res.json(intern);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const intern = await Intern.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(intern);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        await Intern.findByIdAndDelete(req.params.id);

        res.json({
            message: "Intern Deleted Successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
