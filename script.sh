docker run \
    --name postgres \
    -e POSTGRES_USER=admin \
    -e POSTGRES_PASSWORD='123' \
    -e POSTGRES_DB=system \
    -p 5432:5432 \
    -d \
    postgres

docker run \
    --name mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=gibson \
    -e MONGO_INITDB_ROOT_PASSWORD="senha" \
    -p 27017:27017 \
    -d \
    mongo:8