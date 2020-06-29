from celineyeh._config import Config


def test_debug():
    settings = {'debug': True}
    config = Config(settings)

    assert config.debug is True