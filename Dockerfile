FROM node:16.14.0-slim
WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY ./src ./src

EXPOSE 3000 9229

# "start" is the default value of this env-variable -> see package.json
ENV PACKAGEJSON_SCRIPT_COMMAND start

# We could run ENTRYPOINT in shell form in order to pass the ENV variable. 
# ---> ENTRYPOINT npm run ${packageJsonScriptCommand}
# Behind the scenes it would change it to:
# ---> ENTRYPOINT ["/bin/sh" "-c" "npm run ${packageJsonScriptCommand}"]

# That is why we just explicitly run it with ENTRYPOINT in exec form
ENTRYPOINT ["/bin/sh", "-c", "npm run $PACKAGEJSON_SCRIPT_COMMAND"]

# If you need bash instead of sh, you could also run
# ---> ENTRYPOINT ["/bin/bash", "-c", "npm run $packageJsonScriptCommand"]
