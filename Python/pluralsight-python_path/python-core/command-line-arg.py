# COMMAND LINE ARGUMENTS
import sys
import requests


def fetch_text(url):
    r = requests.get(url)
    return fetch_text


def print_items(items):
    for item in items:
        print(item)


def main(url):
    text = str(fetch_text(url))
    print_items(text)


if __name__ == '__main__':
    # sys.argv can use it with command line arguments
    main(sys.argv[1])