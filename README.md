# File Upload and Download Application

This application is built to handle file uploads (for the company logo - JPG and PNG only), generate signed download and upload URLs for the uploaded files, and provide API endpoints to retrieve company data stored in the database. It is developed using Next.js, AWS SDK, Axios, Express, and Mongoose. The api endpoints served as datasource for its graphql [server](server)

## Features

- File Upload: Users can upload files through the application.
- Signed Download URLs: The application generates signed URLs that allow authorized users to securely download the uploaded files.
- Signed Upload URLs: The application generates signed URLs that allow authorized users to securely upload files.
- API Endpoints: The application provides API endpoints to access company data stored in the database.
- Next.js: The application is built using Next.js, a popular React framework that provides server-side rendering and other performance optimizations.

## Prerequisites

Make sure you have the following dependencies installed before running the application:

- Node.js: Install Node.js from the official website (https://nodejs.org).
- AWS SDK: The application uses the AWS SDK to interact with AWS services. Install it using the following command:

```bash
npm install aws-sdk
```

- Axios: Axios is used for making HTTP requests in the application. Install it using the following command:

```bash
npm install axios
```

- Express: Express is a web framework used for handling API endpoints. Install it using the following command:

```bash
npm install express
```

- Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB. Install it using the following command:

```bash
npm install mongoose
```

- Next.js: Next.js is a React framework used for building server-side rendered applications. Install it using the following command:

```bash
npx create-next-app@latest
```

## Configuration

To configure the application, you need to set up the necessary environment variables:

- AWS Access Key and Secret Access Key: Obtain your AWS Access Key ID and Secret Access Key from the AWS Management Console. Set them as environment variables in your development environment.
- MongoDB Connection String: If you are using MongoDB for storing company data, obtain the connection string from your MongoDB provider and set it as an environment variable.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/millidavitti/aws_signed_url.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Access the application in your browser:

```
http://localhost:3000
```

## API Endpoints

The application provides the following API endpoints for accessing company data:

- `GET /api/company`: Retrieve a list of all companies.
- `GET /api/company/:id`: Retrieve a specific company by its ID.
- `POST /api/company/create`: Create a new company.
- `POST /api/company/update`: Update an existing company.

## Deployment

To deploy the application to a production environment, follow the deployment instructions for Next.js applications. Ensure that the necessary environment variables are set in the production environment.

## Contributions

Contributions to the project are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue in the repository.

## License

This project is licensed under the [MIT License](LICENSE).
