# OneServe

#### Technology used
- Database: MySQL
- Backend: Spring, Hibernate
- Frontend: React
- Build Tool: Maven

# Setup
### Database
The project uses a MySQL database and so you will need to either create one locally or edit the application.properties to point at a MySQL database of your choosing.

### Local MySQL server settings
- Port Number: 3306
- Database Name: technical_test
- Username: root
- Password: root

### Edit File
Edit the file `Oneserve/src/main/resources/application.properties` To point the application to a different MySQL database.

### Project
Extract the zip and navigate to the root project folder.

### Install
To in#stall the project dependencies run the `mvn install` command or using an IDE. This will install both the dependencies for Spring as well as node for the frontend as well.

### Run
To run the application run the `mvn spring-boot:run` command or run the command via an IDE. This will create a build of the frontend application and add it to the Spring build as it starts.

The application should start on http://localhost:8080
However the output from the server startup will give you the port number if 8080 is not being used
