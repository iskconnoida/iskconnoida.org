###############################################################
# (!) CAUTION: DO NOT ALTER THIS FILE
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

# Start Server
ENTRYPOINT ["yarn", "dev"]

