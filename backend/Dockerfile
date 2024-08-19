###############################################################
# (!) CAUTION: PLEASE DO NOT ALTER THIS FILE BY YOURSELF!
# IF WANT TO CHANGE ANYTHING THEN CONTACT TO THE ADMIN.
###############################################################


## Backend Server Setup ##
#######################################

# Use an Node alpine base image
FROM node:22-alpine as backend-server

# Setting up the work directory
WORKDIR /backend/server

# Copy your application code
COPY . .

# Install dependencies
RUN yarn install

# Expose Port
EXPOSE 3000

# Start Server
ENTRYPOINT ["yarn", "start"]

