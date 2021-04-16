export PGPASSWORD='admin'

database="monstersdb"

echo "Configuring database: $database"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql monstersdb -U node_user < ./bin/sql/monsters.sql

echo "Configured database: $database"

