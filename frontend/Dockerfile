###############################################################
# (!) CAUTION: PLEASE DO NOT ALTER THIS FILE BY YOURSELF!
# IF WANT TO CHANGE ANYTHING THEN CONTACT TO THE ADMIN.
###############################################################


#-------------------------------- Stage 1 --------------------------------

## Frontend Builder ##
#######################################

# Use an Node alpine base image
FROM node:22-alpine as frontend-builder

# Setting up the work directory
WORKDIR /iskconnoida.org

# Copy your application code
COPY . .

# Install frontend dependencies
RUN yarn install && yarn build



#-------------------------------- Stage 2 --------------------------------

## Frontend Server Setup ##
#######################################

# Use an ubuntu base image
FROM nginx:1.26 as frontend-server

# Update package and install dependencies
RUN apt update -y \
    && apt install curl nano -y \
    && apt-get clean

# Setting up the work directory
WORKDIR /usr/share/nginx/html

# Remove all old files
RUN rm -rf ./*

# Copy build to nginx server
COPY --from=frontend-builder /iskconnoida.org/dist/ .

# Copy nginx conf to nginx server
COPY ./deploy/default.conf /etc/nginx/conf.d/default.conf

STOPSIGNAL SIGTERM

# Expose Port
EXPOSE 80

# RUN nginx in daemon mode
ENTRYPOINT ["nginx", "-g", "daemon off;"]

