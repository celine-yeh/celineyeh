import os
import yaml

from .util import lazy_service


class Config:

    def __init__(self, settings):
        self._settings = settings

    @property
    def debug(self):
        return self._settings.get('debug')


@lazy_service
def config():
    with open(os.environ['SETTINGS_PATH']) as ymlfile:
        settings = yaml.load(ymlfile, Loader=yaml.FullLoader)

    return Config(settings)