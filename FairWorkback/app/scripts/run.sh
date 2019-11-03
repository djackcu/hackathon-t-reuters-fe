#!/usr/bin/env bash

python manage.py makemigrations
python manage.py migrate

python manage.py collectstatic --no-input

/opt/conda/envs/app/bin/gunicorn -w 4 -b 0.0.0.0:8000 app.wsgi:application

#python manage.py runserver 0.0.0.0:8000
#gunicorn --bind 0:8000 app.wsgi --timeout 120 --log-level=DEBUG --keep-alive 5
