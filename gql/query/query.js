import { GraphQLObjectType } from "graphql";
import { getContactResolver, getCourseResolver, getStudentCourseResolver, getStudentResolver, getStudentTmaResolver, getTmeResolver } from "../Resolver/resolver";

export const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        //Get Query
        getStudent: getStudentResolver,
        getStudentCourse: getStudentCourseResolver,
        getContact: getContactResolver,
        getCourse: getCourseResolver,
        getStudentTma: getStudentTmaResolver,
        getTma: getTmeResolver,
    }
})