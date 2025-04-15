const { Staff } = require("../../../models");

async function getStaffs(limit = 20, page = 0) {
  const skip = page * limit;
  return Staff.find().limit(parseInt(limit)).skip(skip);
}

async function getStaffById(id) {
  return Staff.findById(id);
}

async function getStaffByName(name) {
  return Staff.findOne({ name: name });
}

async function createStaff(name, worked_on, position) {
  return Staff.create({ name, worked_on, position });
}

module.exports = {
  getStaffs,
  getStaffById,
  getStaffByName,
  createStaff,
};
