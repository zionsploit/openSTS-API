import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { contactType, courseType, studentCourseType, studentTMAType, studentType, TMAType } from "../typedef/typedef";
import { Connection, sql } from "../../database/connection";
import { addContactQuery, addCourseQuery, addStudentCourseQuery, addStudentQuery, addStudentTMAQuery, addTMAQuery, deleteContactQuery, deleteCourseQuery, deleteStudentCourseQuery, deleteStudentQuery, deleteStudentTmaQuery, deleteTmaQuery, getContactQuery, getCourseQuery, getStudentCourseQuery, getStudentQuery, getStudentTMAQuery, getTMAQuery, updateContactQuery, updateCourseQuery, updateStudentCourseQuery, updateStudentQuery, updateStudentTmaQuery, updateTMAQuery } from "../../database/query";
import { format } from "date-fns";

//ADD RESOLVERS
export const addStudentResolver = {
    type: new GraphQLList(studentType),
    args: {
        firstName: { type: GraphQLString },
        secondName: { type: GraphQLString },
        idNumber: { type: GraphQLInt },
        studComment: { type: GraphQLString },
        phoneNo: { type: GraphQLInt },
        emailAddress: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {

            const dateCreated = format(new Date(), 'MMM/dd/yyy');
            const pool = Connection();
            const result = (await pool).request()
                .input('firstName', sql.VarChar(50), args.firstName)
                .input('secondName', sql.VarChar(50), args.secondName)
                .input('idNumber', sql.Int, args.idNumber)
                .input('studComment', sql.VarChar(50), args.studComment)
                .input('phoneNo', sql.Int, args.phoneNo)
                .input('emailAddress', sql.VarChar(50), args.emailAddress)
                .input('dateCreated', sql.VarChar, dateCreated)
                .query(addStudentQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }

        } catch (error) {
            console.log(`Error Mutating addStudentResolver ${error}`);
        }
    }
}

export const addStudentCourseResolver = {
    type: new GraphQLList(studentCourseType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        endDateLength: { type: GraphQLInt },
        dormant: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {

            const startDate = format(new Date(), 'MMM/dd/yyy');
            const endDate = format(new Date().setDate(new Date().getDate() + args.endDateLength), 'MMM/dd/yyy');
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .input('startDate', sql.VarChar(50), startDate)
                .input('endDate', sql.VarChar(50), endDate)
                .input('dormant', sql.VarChar(), args.dormant)
                .query(addStudentCourseQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating addStudentCourseResolver ${error}`);
        }
    }
}

export const addContactResolver = {
    type: new GraphQLList(contactType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        type: { type: GraphQLString },
        duration: { type: GraphQLInt },
        contactComment: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {

            const dateOfContact = format(new Date(), 'MMM/dd/yyy')
            const dateForNextContact = format(new Date().setDate(new Date().getDate() + args.duration), 'MMM/dd/yyy')

            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .input('dateOfContact', sql.VarChar(50), dateOfContact)
                .input('type', sql.VarChar(50), args.type)
                .input('duration', sql.VarChar(50), args.duration)
                .input('contactComment', sql.VarChar(50), args.contactComment)
                .input('dataForNextContact', sql.VarChar(50), dateForNextContact)
                .query(addContactQuery);

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }

        } catch (error) {
            console.log(`Error Mutating addContactResolver ${error}`);
        }
    }
}

export const addCourseResolver = {
    type: new GraphQLList(courseType),
    args: {
        courseId: { type: GraphQLInt },
        courseName: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('courseId', sql.Int, args.courseId)
                .input('courseName', sql.VarChar(50), args.courseName)
                .query(addCourseQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating addCourseResolver ${error}`);
        }
    }
}

export const addStudentTmaResolver = {
    type: new GraphQLList(studentTMAType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString },
        grade: { type: GraphQLFloat },
        dateIn: { type: GraphQLString },
        dateOut: { type: GraphQLString },
        studentsTmaGradeComment: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .input('tmaId', sql.VarChar(50), args.tmaId)
                .input('grade', sql.Float, args.grade)
                .input('dateIn', sql.VarChar(50), args.dateIn)
                .input('dateOut', sql.VarChar(50), args.dateOut)
                .input('studentsTmaGradeComment', sql.VarChar, args.studentsTmaGradeComment)
                .query(addStudentTMAQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating addStudentTmaResolver ${error}`);
        }
    }
}

export const addTmaResolver = {
    type: new GraphQLList(TMAType),
    args: {
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString },
        tmaLetter: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('courseId', sql.Int, args.courseId)
                .input('tmaId', sql.VarChar(50), args.tmaId)
                .input('tmaLetter', sql.VarChar(50), args.tmaLetter)
                .query(addTMAQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating addTmaResolver ${error}`)
        }
    }
}

//GET RESOLVERS
export const getStudentResolver = {
    type: new GraphQLList(studentType),
    async resolve() {
        try {
            const pool = Connection()
            const result = (await pool).request().query(getStudentQuery)

            if ((await result)) {
                return (await result).recordset
            }
        } catch (error) {
            console.log(`Error Querying getStudentResolver ${error}`)
        }
    }
}

export const getStudentCourseResolver = {
    type: new GraphQLList(studentCourseType),
    async resolve() {
        try {
            const pool = Connection()
            const result = (await pool).request().query(getStudentCourseQuery)

            if ((await result)) {
                return (await result).recordset
            }
        } catch (error) {
            console.log(`Error Querying getStudentCourse ${error}`)
        }
    }
}

export const getContactResolver = {
    type: new GraphQLList(contactType),
    async resolve() {
        try {
            const pool = Connection()
            const result = (await pool).request().query(getContactQuery)

            if ((await result)) {
                return (await result).recordset
            }
        } catch (error) {
            console.log(`Error Querying getContact ${error}`)
        }
    }
}

export const getCourseResolver = {
    type: new GraphQLList(courseType),
    async resolve() {
        try {
            const pool = Connection()
            const result = (await pool).request().query(getCourseQuery)

            if ((await result)) {
                return (await result).recordset
            }
        } catch (error) {
            console.log(`Error Querying getCourse ${error}`)
        }
    }
}

export const getStudentTmaResolver = {
    type: new GraphQLList(studentTMAType),
    async resolve() {
        try {
            const pool = Connection()
            const result = (await pool).request().query(getStudentTMAQuery)

            if ((await result)) {
                return (await result).recordset
            }
        } catch (error) {
            console.log(`Error Querying getStudentTma ${error}`)
        }
    }
}

export const getTmeResolver = {
    type: new GraphQLList(TMAType),
    async resolve() {
        try {
            const pool = Connection()
            const result = (await pool).request().query(getTMAQuery)

            if ((await result)) {
                return (await result).recordset
            }
        } catch (error) {
            console.log(`Error Querying getTma ${error}`)
        }
    }
}

//UPDATE RESOLVERS
export const updateStudentResolver = {
    type: new GraphQLList(studentType),
    args: {
        studentId: { type: GraphQLID },
        firstName: { type: GraphQLString },
        secondName: { type: GraphQLString },
        idNumber: { type: GraphQLInt },
        studComment: { type: GraphQLString },
        phoneNo: { type: GraphQLInt },
        emailAddress: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('firstName', sql.VarChar(50), args.firstName)
                .input('secondName', sql.VarChar(50), args.secondName)
                .input('idNumber', sql.Int, args.idNumber)
                .input('studComment', sql.VarChar(50), args.studComment)
                .input('phoneNo', sql.Int, args.phoneNo)
                .input('emailAddress', sql.VarChar(50), args.emailAddress)
                .query(updateStudentQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating updateStudent ${error}`)
        }
    }
}

export const updateStudentCourseResolver = {
    type: new GraphQLList(studentCourseType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        dormant: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .input('dormant', sql.VarChar(), args.dormant)
                .query(updateStudentCourseQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating updateStudentCourse ${error}`)
        }
    }
}

export const updateContactResolver = {
    type: new GraphQLList(contactType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        dateOfContact: { type: GraphQLString },
        type: { type: GraphQLString },
        duration: { type: GraphQLString },
        contactComment: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const dateOfContact = format(new Date(), 'MMM/dd/yyy')
            const dateForNextContact = format(new Date(dateOfContact).setDate(new Date().getDate() + args.duration), 'MMM/dd/yyy')

            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .input('dateOfContact', sql.VarChar(50), args.dateOfContact)
                .input('type', sql.VarChar(50), args.type)
                .input('duration', sql.VarChar(50), args.duration)
                .input('contactComment', sql.VarChar(50), args.contactComment)
                .input('dateForNextContact', sql.VarChar(50), dateForNextContact)
                .query(updateContactQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating updateContact ${error}`)
        }
    }
}

export const updateCourseResolver = {
    type: new GraphQLList(courseType),
    args: {
        courseId: { type: GraphQLInt },
        courseName: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('courseId', sql.Int, args.courseId)
                .input('courseName', sql.VarChar(50), args.courseName)
                .query(updateCourseQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating updateCourse ${error}`)
        }
    }
}

export const updateStudentTmaResolver = {
    type: new GraphQLList(studentTMAType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString },
        grade: { type: GraphQLFloat },
        dateIn: { type: GraphQLString },
        dateOut: { type: GraphQLString },
        studentsTmaGradeComment: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .input('tmaId', sql.VarChar(50), args.tmaId)
                .input('grade', sql.Float, args.grade)
                .input('dateIn', sql.VarChar(50), args.dateIn)
                .input('dateOut', sql.VarChar(50), args.dateOut)
                .input('studentsTmaGradeComment', sql.VarChar(), args.studentsTmaGradeComment)
                .query(updateStudentTmaQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating updateStudentTma ${error}`)
        }
    }
}

export const updateTmaResolver = {
    type: new GraphQLList(TMAType),
    args: {
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString },
        tmaLetter: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('courseId', sql.Int, args.courseId)
                .input('tmaId', sql.VarChar(50), args.tmaId)
                .input('tmaLetter', sql.VarChar(), args.tmaLetter)
                .query(updateTMAQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating updateTma ${error}`)
        }
    }
}

//DELETE RESOLVERS
export const deleteStudentResolver = {
    type: new GraphQLList(studentType),
    args: {
        studentId: { type: GraphQLID }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .query(deleteStudentQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating deleteStudent ${error}`)
        }
    }
}

export const deleteStudentCourseResolver = {
    type: new GraphQLList(studentCourseType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .query(deleteStudentCourseQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating deleteStudentCourse ${error}`)
        }
    }
}

export const deleteContactResolver = {
    type: new GraphQLList(contactType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .query(deleteContactQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating deleteContact ${error}`)
        }
    }
}

export const deleteCourseResolver = {
    type: new GraphQLList(courseType),
    args: {
        courseId: { type: GraphQLInt }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('courseId', sql.Int, args.courseId)
                .query(deleteCourseQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating deleteCourse ${error}`)
        }
    }
}

export const deleteStudentTmaResolver = {
    type: new GraphQLList(studentTMAType),
    args: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('studentId', sql.Int, args.studentId)
                .input('courseId', sql.Int, args.courseId)
                .query(deleteStudentTmaQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating deleteStudentTma ${error}`)
        }
    }
}

export const deleteTmaResolver = {
    type: new GraphQLList(TMAType),
    args: {
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString }
    },
    async resolve(_, args) {
        try {
            const pool = Connection()
            const result = (await pool).request()
                .input('courseId', sql.Int, args.courseId)
                .input('tmaId', sql.VarChar(50), args.tmaId)
                .query(deleteTmaQuery)

            if ((await result).rowsAffected == 1) {
                return [{ "returnCode": "Success" }]
            }
        } catch (error) {
            console.log(`Error Mutating deleteTma ${error}`)
        }
    }
}