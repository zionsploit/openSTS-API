import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const studentType = new GraphQLObjectType({
    name: 'studentType',
    fields: {
        studentId: { type: GraphQLID },
        firstName: { type: GraphQLString },
        secondName: { type: GraphQLString },
        idNumber: { type: GraphQLInt },
        studComment: { type: GraphQLString },
        phoneNo: { type: GraphQLInt },
        emailAddress: { type: GraphQLString },
        dateCreated: { type: GraphQLString },
        returnCode: { type: GraphQLString }
    }
})

export const studentCourseType = new GraphQLObjectType({
    name: 'studentCourseType',
    fields: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        dormant: { type: GraphQLString },
        returnCode: { type: GraphQLString }
    }
})

export const contactType = new GraphQLObjectType({
    name: 'contactType',
    fields: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        dateOfContact: { type: GraphQLString },
        type: { type: GraphQLString },
        duration: { type: GraphQLString },
        contactComment: { type: GraphQLString },
        dateForNextContact: { type: GraphQLString },
        returnCode: { type: GraphQLString }
    }
})

export const courseType = new GraphQLObjectType({
    name: 'courseType',
    fields: {
        courseId: { type: GraphQLInt },
        courseName: { type: GraphQLString },
        returnCode: { type: GraphQLString }
    }
})

export const studentTMAType = new GraphQLObjectType({
    name: 'studentTMAType',
    fields: {
        studentId: { type: GraphQLID },
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString },
        grade: { type: GraphQLFloat },
        dateIn: { type: GraphQLString },
        dateOut: { type: GraphQLString },
        studentsTmaGradeComment: { type: GraphQLString },
        returnCode: { type: GraphQLString }
    }
})

export const TMAType = new GraphQLObjectType({
    name: 'TMAType',
    fields: {
        courseId: { type: GraphQLInt },
        tmaId: { type: GraphQLString },
        tmaLetter: { type: GraphQLString },
        returnCode: { type: GraphQLString }
    }
})