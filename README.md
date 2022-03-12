# nodejs
A nodejs playground 

# Build app docker image
```
docker build -t myappimage .
```

# Run app as docker container
```
docker run --name myapp -p 3000:3000 myappimage
```

# Connect to redis docker container
```
docker exec -it redis redis-cli -a {YOUR_PASSWORD}
```
