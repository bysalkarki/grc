####################
# Base Stage       #
####################
FROM node:22-alpine AS base

WORKDIR /usr/src/app

# Copy package files first for caching
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

USER node

####################
# Development Stage#
####################
FROM base AS development

# Copy source code
COPY --chown=node:node . .

# Expose dev port
EXPOSE 3000

# Default command for dev with hot reload
CMD ["yarn", "start:dev"]

####################
# Build Stage      #
####################
FROM base AS build

COPY --chown=node:node . .

# Build project for production
RUN yarn build

####################
# Production Stage #
####################
FROM node:22-alpine AS production

WORKDIR /usr/src/app

# Copy node_modules from base
COPY --from=base /usr/src/app/node_modules ./node_modules

# Copy built dist folder
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
