# Django-VueJS
Simple Django project that uses Vue.js in a mixed approach to templates.

Currently to run locally, local_settings.py file in src/core/settings is required. It sholud contain DB configuration, Webpack Loader configuration and secret key, also DEBUG can be set to True, otherwise False.

Example:
----------------------------------
import os
from .base import BASE_DIR


SECRET_KEY = 'XXX'

DEBUG = True


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'XXX',
        'USER': 'XXX',
        'PASSWORD': 'XXX',
        'HOST': 'localhost',
        'PORT': '',
    }
}


WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': False,
        'BUNDLE_DIR_NAME': 'bundles/', # must end with slash
        'STATS_FILE': os.path.join(os.path.join(os.path.dirname(BASE_DIR), 'frontend'), 'webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': [r'.+\.hot-update.js', r'.+\.map']
    }
}
----------------------------------
