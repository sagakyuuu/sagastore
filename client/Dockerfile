FROM node:23 AS builder
RUN useradd -ms /bin/sh -u 1001 app
USER app

WORKDIR /app

RUN chown -R app:app /app


COPY package*.json ./
RUN npm install

COPY --chown=user:app . .
  
RUN npm run build

FROM node:23-alpine AS prod

COPY --from=builder --chown=user:app /app/package.json ./
COPY --from=builder --chown=user:app /app/.next .next
COPY --from=builder --chown=user:app /app/public public
COPY --from=builder --chown=user:app /app/node_modules node_modules


RUN npm install -g nodemon  # Install nodemon globally



EXPOSE ${PORT}

CMD ["nodemon", "npm", "start" ]