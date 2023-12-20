import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllstudentFromDb = async () => {
  const result = await StudentModel.find();

  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });

  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllstudentFromDb,
  getSingleStudentFromDB,
};
