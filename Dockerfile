# Use a lightweight Node.js version 16 image as a base
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Set environment variables for the database connection
ENV PGUSER=postgres
ENV PGPASSWORD=postgres
ENV PGHOST=localhost
ENV PGPORT=5432
ENV PGDATABASE=mydatabase

# Start the application
CMD [ "npm", "run", "start" ]
