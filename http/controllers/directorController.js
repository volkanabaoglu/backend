import Director from '../../models/Director.js';

const getAllDirectors = async (req, res) => {
  try {
    const directors = await Director.find();
    res.json(directors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDirector = async (req, res) => {
  const director = new Director(req.body);

  try {
    const newDirector = await director.save();
    res.status(201).json(newDirector);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDirector = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    res.json(director);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDirector = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    Object.assign(director, req.body);
    await director.save();
    res.json(director);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDirector = async (req, res) => {
  try {
    await Director.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Director deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllDirectors,
  createDirector,
  getDirector,
  updateDirector,
  deleteDirector,
};
