FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="yacin.alkaissouni@gmx.de"

ADD backend/target/capstone-flag-game.jar capstone-flag-game.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /capstone-flag-game.jar" ]