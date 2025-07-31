docker run \
    --name postgres \
    -e POSTGRES_USER=admin \
    -e POSTGRES_PASSWORD='123' \
    -e POSTGRES_DB=system \
    -p 5432:5432 \
    -d \
    postgres