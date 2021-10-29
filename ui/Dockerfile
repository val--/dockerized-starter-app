FROM node:16-alpine3.11

# this is a development Dockerfile
# and is not intended for production use

WORKDIR /var/www/ui

RUN chown -R node:node /var/www/ui/
RUN chgrp -R 0 /var/www/ui/
RUN chmod -R g+rwX /var/www/ui/

COPY package.json /var/www/ui/
COPY yarn.lock /var/www/ui/

USER 1000
RUN yarn install

COPY --chown=node:node . /var/www/ui

# this what make hot reloading works
# because you are starting your project
# in the same way you running it locally
EXPOSE 3000
RUN yarn run build
CMD yarn start
