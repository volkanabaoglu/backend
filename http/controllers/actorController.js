import Actor from "../../models/Actor.js";


const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createActor = async (req, res) => {
  const actor = new Actor(req.body);

  try {
    const newActor = await actor.save();
    res.status(201).json(newActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getActor = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    res.json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateActor = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    Object.assign(actor, req.body);
    await actor.save();
    res.json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteActor = async (req, res) => {
  try {
    await Actor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Actor deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllActors,
  createActor,
  getActor,
  updateActor,
  deleteActor,
};

