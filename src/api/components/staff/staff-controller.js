const staffService = require('./staff-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getStaffs(request, response, next) {
  try {
    const { limit, page } = request.query;
    const staffs = await staffService.getStaffs(limit, page);
    return response.status(200).json(staffs);
  } catch (error) {
    return next(error);
  }
}

async function getStaffById(request, response, next) {
  try {
    const staff = await staffService.getStaffById(request.params.id);

    if (!staff) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Staff not found');
    }
    
    return response.status(200).json(staff);
  } catch (error) {
    return next(error);
  }
}

async function getStaffByName(request, response, next) {
  try {
    const { name } = request.params; 
    const staff = await staffService.getStaffByName(name);

    if (!staff) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Staff not found');
    }

    return response.status(200).json(staff);
  } catch (error) {
    return next(error);
  }
}

async function createStaff(request, response, next) {
  try {
    const { 
        name, 
        worked_on, 
        position
    } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    if (await staffService.staffNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        'Staff already listed'
      );
    }

    if (!Array.isArray(worked_on) || worked_on.length === 0 || !worked_on.every(i => typeof i === 'string')) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'There must be something that they worked on right?');
    }

    if (!position) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Position is required');
    }

    const success = await staffService.createStaff(
        name, 
        worked_on, 
        position
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create Staff Data'
      );
    }

    return response.status(200).json({ message: 'Staff Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
    getStaffs,
    getStaffById,
    getStaffByName,
    createStaff,
};
