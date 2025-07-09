# Use Node for building Angular app
FROM node:18 as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/dist/your-angular-app-name /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
