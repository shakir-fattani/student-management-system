const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { body } = req;
    const students = await getAllStudents(body);
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const { body } = req;
    const { message } = await addNewStudent(body);
    res.json({ message });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { body } = req;
    const { message } = await updateStudent(body);
    res.json({ message });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const { message } = await setStudentStatus({ userId: id, status, reviewerId: null });
    res.json({ message });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
