from celineyeh import facade


def test_greeting():
    assert facade.greeting('Celine') == 'Hello, Celine'
