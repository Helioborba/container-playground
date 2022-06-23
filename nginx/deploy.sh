docker build -t "gaborba2100e404/playground-nginx" ./
docker push gaborba2100e404/playground-nginx 
# docker tag gaborba2100e404/alpine-dev-nginx registry.heroku.com/alpine-dev-nginx/web
# docker push registry.heroku.com/alpine-dev-nginx/web;
# heroku container:release web --app alpine-dev-nginx; 
# docker push gaborba2100e404/docker_api;
# docker push registry.heroku.com/$HEROKU_API/web; 
# heroku container:release web --app $HEROKU_API; 
# docker push gaborba2100e404/docker_nginx; 
# docker push registry.heroku.com/$HEROKU_NGINX/web;
# heroku container:release web --app $HEROKU_NGINX;