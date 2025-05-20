# Use Node.js for building
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all project files (including src and public)
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the static build files
FROM nginx:alpine

# Copy built files to nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
