
# openSTS-API GRAPHQL
- Open Student Tracking System API 
- Mssql Database
- Writing in Express Js and GraphQL
## Authors

- [@John Mark Banisilon](https://www.facebook.com/crypto.graphy.39/)


## Installation

Install openSTS-API with git command

```bash
  # https://github.com/zionsploit/openSTS-API.git
  # npm install
```
    
# Configurations

```Bash
    ## config.js

    module.exports = {
    //http
    PORT: 5500,
    //DATABASE
    dbUser: //User,
    dbPass: //Pass,
    dbName: //DB NAME,
    dbServer: //DBSERVER default localhost
}
```



# MSSQL TABLE

```Bash
    # Run this query to create table

    CREATE TABLE tblContact (studentId int PRIMARY, 
                                courseId int, 
                                dateOfContact varchar(50),
                                type varchar(50),
                                duration varchar(50),
                                contactComment varchar(50),
                                dateForNextContact varchar(50));

    CREATE TABLE tblCourse (courseId int PRIMARY,
                            courseName varchar(50));
    
    CREATE TABLE tblStudent (studentId int PRIMARY AUTO_INCREMENT,
                            firstName varchar(50),
                            secondName varchar(50),
                            idNumber int,
                            studComment varchar(50),
                            phoneNo int,
                            emailAddress varchar(50),
                            dateCreated varchar(50));
    
    CREATE TABLE tblStudentCourse (studentId int PRIMARY, 
                            courseId int,
                            startDate varchar(50),
                            endDate varchar(50),
                            dormant varchar(50));

    CREATE TABLE tblStudentTMA (studentId int PRIMARY,
                            courseId int,
                            tmaId varchar(50),
                            grade float,
                            dateIn varchar(50),
                            dateOut varchar(50),
                            studentsTmaGradeComment varchar(MAX));
    
    CREATE TABLE tblTMA (courseId int PRIMARY,
                        tmaId varchar(50),
                        tmaLetter varchar(MAX));

```


## Deployment

To deploy this project run

```bash
  # npm run dev
```


# GRAPHQL API REFERENCE
- addStudent(firstname: String, secondName: String, idNumber: Int, studComment: String, phoneNo: Int, emailAddress: String)

- addStudentCourse(studentId: Int, courseId: Int, endDateLength: Int, dormant: String)

- addContact(studentId: Int, courseId: Int, type: String, duration: Int, contactComment: String)

- addCourse(courseId: Int, courseName: String)

- addStudentTma(studentId: Int, courseId: Int, tmaId: String, grade: Float, dateIn: String, dateOut: String, studentsTmaGradeComment: String)

- addTma(courseId: Int, tmaId: String, tmaLetter: String)

- getStudent

- getStudentCourse

- getContact

- getCourse

- getStudentTma

- getTma

- updateStudent(studentId: Int, firstname: String, secondName: String, idNumber: Int, studComment: String, phoneNo: Int, emailAddress: String)

- updateStudentCourse(studentId: Int, courseId: Int, dormant: String)

- updateContact(studentId: Int, courseId: Int, dateOfContact: String, type: String, duration: String, contactComment: String)

- updateCourse(courseId: Int, courseName: String)

- updateStudentTma(studentId: Int, courseId: Int, tmaId: String, grade: Float, dateIn: String, dateOut: String, studentsTmaGradeComment: String)

- updateTma(courseId: Int, tmaId: String, tmaLetter: String)

- deleteStudent(studentId: Int)

- deleteStudentCourse(studentId: Int, courseId: Int)

- deleteContact(studentId: Int, courseId: Int)

- deleteCourse(studentId: Int)

- deleteStudentTma(studentId: Int, courseId: Int)

- deleteTma(courseId: Int, tmaId: String)






## LICENSES
[MIT][https://opensource.org/licenses/MIT]