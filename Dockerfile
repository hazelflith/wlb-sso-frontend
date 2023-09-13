# Stage 1 - the build process
FROM node:10.18.1 as build-deps
ENV REACT_APP_API_URL=https://api.wlb.co.id
ENV REACT_APP_GRAPHQL_URL=https://gql.wlb.co.id/v1/graphql
ENV REACT_APP_GRAPHQL_URL_WS=wss://gql.wlb.co.id/v1/graphql
ENV REACT_APP_AUTH_URL=https://auth.wlb.co.id/api/user
ENV REACT_APP_BASE_APP_URL=http://app.wlb.co.id
ENV REACT_APP_COOKIE=.wlb.co.id
ENV REACT_APP_API_URL_PCS=https://sosmed.wlb.co.id/v1

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN CI=false yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
