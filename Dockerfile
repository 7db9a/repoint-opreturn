FROM node:10.11.0-jessie

RUN apt update

RUN npm install -y -g npm@latest

WORKDIR /project
# Don't use npm link in production.
WORKDIR /project/repoint_opreturn
RUN npm install --save datapay
RUN npm install --save bsv

# Dev stuff.
RUN npm install --save-dev -y babel-cli babel-preset-flow babel-eslint
RUN npm install --save-dev -y eslint
RUN npm install --save-dev -y mocha
RUN npm install --save-dev flow-bin

# Copy repoint_opreturn files to container
Copy . /project/repoint_opreturn

# If you use shared volumes, please copy the prototype directory to
# the shared volume folder while in the container.
