# FROM node:20

# COPY . .

# RUN npm install

# RUN npm run build

# EXPOSE 3000

# CMD [ "npm", "run" , "preview" ]

# Use Node.js 20 as the base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Build Vite/React app
RUN npm run build

# Expose the preview port (usually 4173 for Vite)
EXPOSE 4173

# Run Vite preview command
CMD ["npm", "run", "preview"]
