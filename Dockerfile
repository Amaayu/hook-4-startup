# # Node base image
# FROM node:23.7.0  

# #copy folders in image
# COPY . .

# # run commands
# RUN npm install

# RUN npm run build  

# # ports expose
# EXPOSE 3000

# # cmd 
# CMD [ "npm" , "run" , "preview" ]

# Stage 1: Build Stage
FROM node:23.7.0 

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy source code and build app
COPY . .
EXPOSE 3000

# Start Nginx
CMD ["npm", "run", "dev"]
