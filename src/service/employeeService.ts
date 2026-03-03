export async function validateEmployee(
  firstName: string,
  departmentId: number
): Promise<{
  isValid: boolean;
  errors: string[];
}> {
  const errors: string[] = [];

  if (firstName.trim().length < 3) {
    isValid = false;
    errors.push("First name must have at least three characters.");
  }

  const department = await DepartmentRepo.getDepartmentById(departmentId);

  if (!department) {
    errors.push("Department does not exist");
  }

  return { isValid: errors.length === 0, errors };
}

export async function createEmployee(
    firstName:string, 
    departmentId: number
): Promise<{
    success: boolean;
    errors?: string[];
}> {
    const validation = await validateEmployee(firstName, departmentId);

    if (!validation.isValid) {
        return {
            success: false,
            errors: validation.errors
        };
    }

    await EmployeeRepo.addEmployee({
        firstName,
        departmentId
    });

    return { success: true };
}