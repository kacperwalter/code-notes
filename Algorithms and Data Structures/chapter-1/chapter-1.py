# notacja duzego O (big O notation wyraza zawsze czas w najgorszym wypadku)


def binary_search(list, item):
    low = 0                             # pierwszy element tablicy
    high = len(list) - 1                # ostatni element tablicy (dlugosc tablicy - 1 bo indeksy zaczynaja sie od 0)

    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 7))
