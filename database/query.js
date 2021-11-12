module.exports = {
    //ADD QUERY
    addStudentQuery: 'INSERT INTO tblStudent (firstName, secondName, idNumber, studComment, phoneNo, emailAddress, dateCreated) VALUES (@firstName, @secondName, @idNumber, @studComment, @phoneNo,@emailAddress, @dateCreated)',
    addStudentCourseQuery: 'INSERT INTO tblStudentCourse (studentId, courseId, startDate, endDate, dormant) VALUES (@studentId, @courseId, @startDate, @endDate, @dormant)',
    addContactQuery: 'INSERT INTO tblContact (studentId, courseId, dateOfContact, type, duration, contactComment, dateForNextContact) VALUES (@studentId, @courseId, @dateOfContact, @type, @duration, @contactComment, @dataForNextContact)',
    addCourseQuery: 'INSERT INTO tblCourse (courseId, courseName) VALUES (@courseId, @courseName)',
    addStudentTMAQuery: 'INSERT INTO tblStudentTMA (studentId, courseId, tmaId, grade, dateIn, dateOut, studentsTmaGradeComment) VALUES (@studentId, @courseId, @tmaId, @grade, @dateIn, @dateOut, @studentsTmaGradeComment)',
    addTMAQuery: 'INSERT INTO tblTMA (courseId, tmaId, tmaLetter) VALUES (@courseId, @tmaId, @tmaLetter)',
    //GET QUERY
    getStudentQuery: 'SELECT * from tblStudent order by studentId asc',
    getStudentCourseQuery: 'SELECT * from tblStudentCourse order by courseId asc',
    getContactQuery: 'SELECT * from tblContact order by studentId asc',
    getCourseQuery: 'SELECT * from tblCourse order by courseId asc',
    getStudentTMAQuery: 'SELECT * from tblStudentTMA order by studentId asc',
    getTMAQuery: 'SELECT * from tblTMA order by tmaId asc',
    //UPDATE QUERY
    updateStudentQuery: 'UPDATE tblStudent SET firstName = @firstName, secondName = @secondName, idNumber = @idNumber, studComment = @studComment, phoneNo = @phoneNo, emailAddress = @emailAddress WHERE studentId = @studentId',
    updateStudentCourseQuery: 'UPDATE tblStudentCourse SET dormant = @dormant where studentId = @studentId and courseId = @courseId',
    updateContactQuery: 'UPDATE tblContact SET type=@type, duration=@duration, contactComment=@contactComment, dateForNextContact=@dateForNextContact where studentId = @studentId and courseId = @courseId',
    updateCourseQuery: 'UPDATE tblCourse SET courseId=@courseId, courseName=@courseName WHERE courseId = @courseId',
    updateStudentTmaQuery: 'UPDATE tblStudentTMA SET grade=@grade, dateIn=@dateIn, dateOut=@dateOut, studentsTmaGradeComment=@studentsTmaGradeComment WHERE studentId = @studentId AND courseId = @courseId AND tmaId = @tmaId',
    updateTMAQuery: 'UPDATE tblTMA set tmaId = @tmaId, tmaLetter = @tmaLetter WHERE courseId = @courseId',
    //DELETE QUERY
    deleteStudentQuery: 'DELETE FROM tblStudent WHERE studentId = @studentId',
    deleteStudentCourseQuery: 'DELETE FROM tblStudentCourse WHERE studentId = @studentId AND courseId = @courseId',
    deleteContactQuery: 'DELETE FROM tblContact WHERE studentId = @studentId AND courseId = @courseId',
    deleteCourseQuery: 'DELETE FROM tblCourse WHERE courseId = @courseId',
    deleteStudentTmaQuery: 'DELETE FROM tblStudentTMA WHERE studentId = @studentId AND courseId = @courseId',
    deleteTmaQuery: "DELETE FROM tblTMA WHERE courseId = @courseId AND tmaId = @tmaId"
}