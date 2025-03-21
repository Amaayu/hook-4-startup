# Base image
FROM node:23.7.0 

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy source code and build app
COPY . .
EXPOSE 3000

# Run Vite in dev mode
CMD ["npm", "run", "dev"]
