#!/bin/sh

set -e
# start Container
echo "Contenedor iniciado"
echo "$(date): Ejecutando proceso"

echo ""

ng serve --port $PORT --host 0.0.0.0
# ng serve --port 4200 --host 0.0.0.0
# ng serve