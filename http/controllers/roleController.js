import Role from "../../models/Role.js";

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRole = async (req, res) => {
  const role = new Role({
    name: req.body.name,
    salary: req.body.salary,
  });

  try {
    const newRole = await role.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    role.name = req.body.name;
    role.salary = req.body.salary;
    await role.save();
    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAllRoles, createRole, getRole, updateRole, deleteRole };
