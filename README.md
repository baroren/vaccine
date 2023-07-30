
# Authors
Bar Oren -206548752
Maxim dunkel -321559775 
# Explanations

---------------------
Vaccination Portal Web Application
Vaccination Portal

Welcome to the Vaccination Portal web application! This application is designed to assist countries in efficiently managing COVID-19 vaccination registrations and prioritizing vaccination for vulnerable populations. It is built using React for the frontend, Spring Boot for the backend, and PostgreSQL for the database.

How to Run the Application
Clone this repository to your local machine.
Set up the PostgreSQL database by executing the SQL scripts provided in the backend directory.
Update the database configuration in the backend to match your PostgreSQL settings.
Start the Spring Boot backend server.
Install the required dependencies by running npm install in the frontend directory.
Start the React frontend development server by running npm start.
Access the application in your web browser at http://localhost:3000.



## Running the Backend Server

1. Navigate to the backend directory of your cloned repository: `cd backend`.

2. Install the required dependencies using a package manager like Maven:
   ```
   mvn clean install
   ```

3. Make sure you have PostgreSQL installed and running on your system. Create a new database for the application. You can use the PostgreSQL command-line tools or a graphical interface like pgAdmin.

4. Open the `application.properties` file located in `src/main/resources` folder. Update the following properties with your PostgreSQL database credentials:

   ```
   spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
   spring.datasource.username=your_database_username
   spring.datasource.password=your_database_password
   ```

5. Save the changes to the `application.properties` file.

6. Start the backend server by running the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

   The backend server will now be running on `http://localhost:8080`.

## Setting Up the PostgreSQL Database

1. Make sure you have PostgreSQL installed and running on your system.

2. Open a command-line tool or pgAdmin and log in with your PostgreSQL credentials.

3. Create a new database for the Vaccination Portal application. You can use the following SQL command:

   ```sql
   CREATE DATABASE vaccination_portal;
   ```

4. Create a new table to store registration data. You can use the following SQL command:

   ```sql
   CREATE TABLE registration (
       id SERIAL PRIMARY KEY,
       first_name VARCHAR(100) NOT NULL,
       last_name VARCHAR(100) NOT NULL,
       date_of_birth DATE NOT NULL,
       address VARCHAR(255) NOT NULL,
       city VARCHAR(100) NOT NULL,
       zip_code VARCHAR(20) NOT NULL,
       landline VARCHAR(20),
       cell_phone VARCHAR(20),
       infected BOOLEAN NOT NULL,
       conditions TEXT[],
       other_condition VARCHAR(255)
   );
   ```

5. The table is now ready to store registration data.

6. If you have more entities and tables in your backend, repeat the steps above to create additional tables as needed.

With the backend server running and the database set up, your Vaccination Portal web application is now ready to use. The frontend and backend will communicate to provide a seamless experience for users, allowing them to register for vaccinations and access relevant information about COVID-19 vaccines.

Technologies Used
React: Frontend development and user interface design.
Spring Boot: Backend development and RESTful API implementation.
PostgreSQL: Backend database management.
Axios: For making HTTP requests between the frontend and backend.
Bootstrap: Styling and responsive design.
AI Tools: Integration of AI-powered chatbot to enhance user engagement
