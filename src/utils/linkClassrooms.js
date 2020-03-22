const Classroom = require('../models/classroom')

const linkClassrooms = async (subjectObject) => {
    let classrooms = []
    for (const classroom of subjectObject.classrooms) {
        const classroomDetails = classroom.split('_')
        const originalClassroom = await Classroom.findOne({ branch: classroomDetails[0], sem: classroomDetails[1], classroom: classroomDetails[2] })
        if (!originalClassroom) {
            return undefined
        }
        const newClassroom = { classroom: originalClassroom._id }
        classrooms.push(newClassroom)
    }
    return classrooms
}

module.exports = linkClassrooms