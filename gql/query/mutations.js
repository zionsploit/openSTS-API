import { GraphQLObjectType } from "graphql";
import { addContactResolver, addCourseResolver, addStudentCourseResolver, addStudentResolver, addStudentTmaResolver, addTmaResolver, deleteContactResolver, deleteCourseResolver, deleteStudentCourseResolver, deleteStudentResolver, deleteStudentTmaResolver, deleteTmaResolver, updateContactResolver, updateCourseResolver, updateStudentCourseResolver, updateStudentResolver, updateStudentTmaResolver, updateTmaResolver } from "../Resolver/resolver";

export const rootMutations = new GraphQLObjectType({
    name: 'rootMutations',
    fields: {
        //ADD Mutations
        addStudent: addStudentResolver,
        addStudentCourse: addStudentCourseResolver,
        addContact: addContactResolver,
        addCourse: addCourseResolver,
        addStudentTma: addStudentTmaResolver,
        addTma: addTmaResolver,
        //UPDATE Mutations
        updateStudent: updateStudentResolver,
        updateStudentCourse: updateStudentCourseResolver,
        updateContact: updateContactResolver,
        updateCourse: updateCourseResolver,
        updateStudentTma: updateStudentTmaResolver,
        updateTma: updateTmaResolver,
        //DELETE Mutations
        deleteStudent: deleteStudentResolver,
        deleteStudentCourse: deleteStudentCourseResolver,
        deleteContact: deleteContactResolver,
        deleteCourse: deleteCourseResolver,
        deleteStudentTma: deleteStudentTmaResolver,
        deleteTma: deleteTmaResolver,
    }
})