#!/bin/sh
set -e

echo "==> Attente de la base de données PostgreSQL..."
if [ -n "$POSTGRES_HOST" ]; then
    while ! nc -z "$POSTGRES_HOST" "${POSTGRES_PORT:-5432}"; do
        sleep 0.5
    done
    echo "==> Base de données disponible !"
fi

echo "==> Application des migrations Django..."
python manage.py migrate --noinput

echo "==> Peuplement des données initiales PrimaWeb..."
python manage.py seed_data

echo "==> Collecte des fichiers statiques..."
python manage.py collectstatic --noinput || true

echo "==> Démarrage du serveur..."
exec "$@"
