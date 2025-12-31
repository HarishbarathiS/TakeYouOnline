FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# Copy all files
COPY . .

# Install dependencies and build
RUN pnpm install
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
