import socket


def resolve(host):
    return socket.gethostbyname(host)

# print(resolve('sixty-north.com'))

# caching resolver
class Resolver:
    def __init__(self):
        self._cache = {}

    def __call__(self, host):
        if host not in self._cache:
            self._cache[host] = socket.gethostbyname(host)
        return self._cache[host]