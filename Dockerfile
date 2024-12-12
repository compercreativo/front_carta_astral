FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install -g @angular/cli
RUN npm install
RUN npm install primeng primeicons --save
COPY ./scripts/entrypoint.sh /scripts/

RUN chmod +x /scripts/entrypoint.sh
RUN apk add --no-cache dos2unix
RUN dos2unix /scripts/entrypoint.sh

# CMD ["ng", "serve"]
CMD ["sh", "/scripts/entrypoint.sh"]
