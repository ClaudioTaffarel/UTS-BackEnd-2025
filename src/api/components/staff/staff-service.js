const staffRepository = require("./staff-repository");

async function getStaffs(limit, page) {
  return staffRepository.getStaffs(limit, page);
}

async function getStaffById(id) {
  return staffRepository.getStaffById(id);
}

async function getStaffByName(name) {
  return staffRepository.getStaffByName(name);
}

async function staffNameExists(name) {
  const staff = await staffRepository.getStaffByName(name);
  return !!staff;
}

async function createStaff(name, worked_on, position) {
  return staffRepository.createStaff(name, worked_on, position);
}

module.exports = {
  getStaffs,
  getStaffById,
  getStaffByName,
  staffNameExists,
  createStaff,
};
