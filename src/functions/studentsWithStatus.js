function studentsWithStatus(students) {
    const listStudentsWithStatus = students.map(student => {
        if (student.moyenne > 10 && student.level !== 3) return { ...student, status: "admis" }
        if (student.moyenne < 10) return { ...student, status: "refusé" }
        return { ...student, status: "taarej" }
    })

    return listStudentsWithStatus;
};

export default studentsWithStatus;
