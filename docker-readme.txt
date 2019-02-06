In the following instructions assume that your username on Docker Hub is snoopy 
and that there is a repository in Docker Hub named toon.

Docker Hub >>       docker build --tag node-toon:linux .
Azure Registry >>   docker build --tag medhat.azurecr.io/toons:1.0 .

docker run -d -p 8888:3000 node-toon:linux

Point your browser to http://localhost:8888

Docker Hub >>       docker login --username=snoopy
Azure Registry >>   docker login medhat.azurecr.io

docker tag node-toon:linux snoopy/node-toon:linux

Docker Hub >>       docker push snoopy/node-toon:linux
Azure Registry >>   docker push medhat.azurecr.io/toons:1.0

docker pull snoopy/node-toon:linux

docker run -d -p 8888:3000 snoopy/node-toon:linux