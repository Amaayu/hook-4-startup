# Node base image
FROM node:23.7.0  

#copy folders in image
COPY . .

# run commands
RUN npm install

RUN npm run build  

# ports expose
EXPOSE 3000

# cmd 
CMD [ "npm" , "run" , "preview" ]


