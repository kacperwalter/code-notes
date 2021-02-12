# France = 'FR'
# a print(France)
#
# pi = 3.14
# r = 10
#
# print(pi,r, pi*r**2)
# print(1,2,3, sep='-') #sep = czym mają być rozdzielone wypisywane liczby
# print(1,2,3, sep='\a')
#
# print('\u03a3')
# print('this is backslash : \\')

# print('TVP1','TVP2','TVN','Polsat','BBC','HBO','MTV', sep=';')
#
# ProgramName = 'BBC'
# Item = 'News'
# Time = '18:00'
#
# print('I like watching',Item,'at',Time,'on',ProgramName,'\b''.')

# atext = 'This is a text.'
# czyKonczy = atext.endswith('ext.')
# print(czyKonczy)
#
# duzeLitery = atext.upper()
# print(duzeLitery)
#
# czyDuzeLitery = atext.upper().isupper()
# print(czyDuzeLitery)
#
# atext.find('is') #znajduje czy w stringu jest ten napis i zwraca od której pozycji się zaczyna
# atext.find('is',3) #od której litery ma zacząć
#
# print(atext.replace('s','4'))
#
# tabela = atext.split(' ') #rozdziela text na tabele (za pomocą argumentu spacja)
# print(tabela)

# quote = 'A good programmer is someone who always looks both ways before crossing a one-way street'
# print(quote.upper())
# print(quote.lower())
# print(quote.endswith('street'))
# print(quote.isupper())
# print(quote.upper().isupper())
# print(quote.find('one'))
# print(quote.replace('one','1'))
# print(quote.replace('one','1').replace('both','2'))
# print(quote.split(' '))
# print(quote.isnumeric())
# print(quote.isdecimal())
# print(quote.isdigit())

# drive = 'c:\\' #żeby backslash został dobrze zinterpretowany trzeba napisać go dwa razy
# folder = 'scrpits\\python\\'
# file = 'myscript.py'
# path = drive + folder + file
# print(path)
#
# justText = r'text with\nnewline'
# print(justText)

# firstName = "Kasia "
# familyName = "Sowa "
# lastName = "Mrugała"
#
# newName = firstName + familyName + lastName
# print(newName)
#
# music = '"Universal Fanfare" Jerry Goldsmith "Happy Together" Garry Bonner "I\'m a Man" Steve Winwood'
# print(music)

# somethingLikeNumber = '1000'
# print(somethingLikeNumber)
#
# print(int(somethingLikeNumber) + 1)
#
# print(somethingLikeNumber + str(1))
#
# article = '''Monty Python (also collectively known as the Pythons)[2][3] were a British surreal comedy group who created their sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes were made over four series. The Python phenomenon developed from the television series into something larger in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The Pythons' influence on comedy has been compared to the Beatles' influence on music.[4][5][6] Their sketch show has been referred to as "not only one of the more enduring icons of 1970s British popular culture, but also an important moment in the evolution of television comedy"ż'''
#
# print(article.replace('Monty','Flying').upper())
#
# arrayArticle = article.split(' ')
# print(arrayArticle)
#
# print('word Python appears',article.count('Python'),'times')
#
# print('to print the \\ you need to put \\ twice in your text like this: \\\ ')
#
# print('The best hits of \'80s!!! ')
# print("The best hits of '80s!!! ")
#
# #mini kalkuator
#
# amountPLN = 234
# print('cur  exchange    amount')
# print('USD  3.65       '3.65/amountPLN)



# FORMATOWANIE NAPISÓW

# message1 = 'Processing file %s'
# print(message1 % ('file_1.txt'))
# message2 = 'File %s has size %d KB'
# print(message2 % ('file_txt',100))
# message3 = 'File %20s has size %10d KB' #literał rezerwujący daną liczbę miejsc
# print(message3 % ('file1.txt', 100))
# message4 = 'Processing {0:s}' #zero mówi o tym, że spodziewamy się tylko jednego parametru w dane miejsce i że parametr ma być napisem
# print(message4.format('file1.txt'))
# message5 = 'File {0:s} has size {1:d}' #miejsce 0 zarezerwowane jest dla stringa, a miejsce 1 jest zarezerwowane dla liczby
# print(message5.format('file.txt', 100))
# message5 = 'File {1:s} has size {0:d}'
# print(message5.format(100,'file1.txt'))
# message6 = 'File {0:20s} has size {1:10d}'#to także rezerwuje daną liczbę miejsc
# print(message6.format('file.txt', 100))

#zadanka
# helloMessage = "Hello %s!"
# print(helloMessage % ('Kate'))
# print(helloMessage % ('Chris'))
#
# helloMessage = "Hello {0:s}!"
# print(helloMessage.format("Kate"))
# print(helloMessage.format("Chris"))
#
# helloMessage = "%s has %d %s"
# print(helloMessage % ("Kate",1,"animal"))
# print(helloMessage % ("Chris",100000,"$"))
#
# helloMessage = "{0:s} has {1:d} {2:s}"
# print(helloMessage.format('Kate',1,'animal'))
# print(helloMessage.format('Chris',100000,"$"))
#
# linie = "{0:20s} costs {1:6d} €"
# print(linie.format('ICE CREAM',3))
# print(linie.format('TRIP TO VENICE',119))
# print(linie.format('PIZZA HAWAI', 6))



#INT i FLOAT (float to nie jest typ precyzyjny_

# five = 5
# three = 3
#
# import sys
# print(sys.maxsize) #sprawdza jak wielką wartość można użyć w python
#
# five//three #dzielenie całkowite - wynik to ilość trójek, które mieszczą się w piątce (zostaje reszta)
# five % three #dzielenie modulo - wynik to reszta z dzielenia całkowitego
#
# float('inf') #operacja rzutowania - próbuje zmienić napis na liczbę przez co wychodzi nieskończoność
#
# print(float('inf'))
# print(float('inf')>99999999999999)

#OPERACJE NA LICZBACH ZESPOLONYCH
#liczby zespolone to takie liczby, które składają się z dwóch części - części rzeczywistej i urojonej XD

#zadania
# name = "Kacper"
# age = 20
# daysInYear = 365
#
# daysOfLife = age * daysInYear
#
# message = '{0:s} is {1:d} years old, so is about {2:d} days old'
# print(message.format(name,age,daysOfLife))
#
#
# firstNumber = 1234567890
# secondNumber = 12345
# score = firstNumber//secondNumber
# rest = firstNumber % secondNumber
#
# message2 = '{0:d} divided by {1:d} is {2:d} and the rest is {3:d}'
#
# print(message2.format(firstNumber,secondNumber,score,rest))



#TYP I OPERATORY LOGICZNE

#zadania
#
# isAutomaticMode = True
# is80PercentLight = False
# isDirectLight = False
# isRainy = True
#
# turnLightsOn = isAutomaticMode and (not is80PercentLight or isDirectLight or isRainy)
#
# print("Automatic mode:   ",isAutomaticMode)
# print("Is the light good:",is80PercentLight)
# print("Is sun low:       ",isDirectLight)
# print("Is it rainy:      ",isRainy)
# print("TURN LIGHTS ON:   ",turnLightsOn)



#ZMIENNE - TIPS AND TRICKS

# title = 'Python'
# print("Title is", type(title))
#
# version = 3
# print('Version is ',type(version))
#
# progress = 0.21
# print('Progress is ',type(progress))
#
# print('This expression is',type(progress * version)) #float > int
#
# x = 1
# y = 1
# z = 1
# print(x,y,z)
#
# a=b=c=2 #jesli mamy dużo zmiennych o różnych wartościach to móżna to zapisać w ten sposób
# print(a,b,c)
#
# print(2+2*2) #kolejność wykonywania działań zgodna z tym co jest w matematyce
#
# print(4**3**2) #potęgowanie "4 do 3 do 2"
#
# #zadania
#
# v1 = 126
# v2 = '126'
# v3 = 126.0
# v4 = '126.0'
#
# print(v1,type(v1))
# print(v2,type(v2))
# print(v3,type(v3))
# print(v4,type(v4))
#
# print(v1+v3,type(v1+v3))
# print(v2+v4,type(v2+v4))
#
# print(7-1*0+3+3)
#
# print(4**5/2**3)



#NAPIS JAKO TABLICA ZNAKÓW

# s = 'A Python script'
# print(s[0])
# print(s[2])
# print(s[2:7]) #od którego do którego znaku
# print(s[:8]) #od początku do 8 znaku
# print(s[8:]) #od ósmego do końca
#
# message = 'Document "CV.doc" was printed on printer: XEROX'
# print(message.find(':')) #find to metoda znajdująca dany znak (zwraca w którym jest miejscu w stringu)
# found = message[42:]
# print(found)
#
# # print(message[message.find('"')+1:])
# tmp = message[message.find('"')+1:]
# print(tmp[:tmp.find('"')])

#zadanka

# q = "THE EYES"
# print(q[0]+q[1]+q[2]+q[5]+q[3]+q[7]+q[4]+q[6])

# q = "a gentleman"
# print(q[3])
# print(q[6])
# print(q[7])
# print(q[2])
# print(q[0])
# print(q[4])
# print(q[5])
# print(q[1])
# print(q[8:])

#nie chce mi się, ale umiem XD
# angram = "THE MORSE CODE" #HERE COME DOTS
# print(angram[1:3]+angram[6]+angram[2]+angram[3]\
#     +angram[0])

# line = 'Program "Kropka nad i" nadamy o: 22:00'
#
# time = line[line.find(':')+2:]
# print(time)
#
# tmp = line[line.find('"')+1:]
# print(tmp[:tmp.find('"')])

#zadanie drugie
# turnLightsOn = isAutomaticMode and (not is80PercentLight or isDirectLight or isRainy)



#LISTA

# countries = ['FR','USA','DE','RU']
# print(countries)
#
# print(countries[1]) #wyświetlamy numer indeksu
# countries[1] = 'GB' #zmieniamy wartość danego indeksu
# countries.append('PL') #operacja dodawania elementu na końcu listy
# countries.insert(2,'ES') #operacja dodawania elementu w określone miejsce
# countries.remove('RU') #usuwamy element z listy
# countries.sort() #sortowanie
# countries.reverse() #odwracanie listy
# print(countries.pop(2)) #argument pop to numer indeksu który mnie interesuje/funkcja pop zwraca dany element i usuwa go z listy
# print(countries.index('PL')) #sprawdzamy czy dany element znajduje się na liście i jeśli tak to na której pozycji
# print(countries.count('DE')) #sprawdzamy ile razy dany element znajduje się na liście
#
# newList = ["FI","SE"]
# countries.extend(newList) #dodawanie list do siebie
#
# countriesCopy = countries #listę możemy dodać do innej zmiennej tworząc nową liste (jednak lista pozostaje tą samą listą)
# countriesRealCopy = countries.copy() #kopiuje listę
# countriesCopy.clear() #zostawia pustą liste

#zadanka
#
# hitsTitles = ['BROTHERS IN ARMS','BOHEMIAN RHAPSODY','STAIRWAY TO HEAVEN','RIDERS ON THE STORM','WISH YOU WERE HERE']
# hitsTitles.append('CHILD IN TIME')
# hitsTitles.append('AGAIN')
# print(hitsTitles)
#
# hitsTitles.insert(2,'HOTEL CALIFORNIA')
# hitsTitles.insert(0,'THE SOUND OF SILENCE')
# print(hitsTitles)
#
# print(hitsTitles.index('HOTEL CALIFORNIA'))
# hitsTitles.remove('HOTEL CALIFORNIA')
# hitsTitles[0] = 'ENJOY THE SILENCE'
#
# hitsToRead = hitsTitles.copy()
# hitsToRead.reverse()
# hitsToRead.sort()
# print(hitsToRead.pop(0))
# print(hitsToRead.pop(1))
#
# additonalSongs = ['NOTHING COMPARES 2 U', 'WISH YOU WERE HERE']
# hitsToRead.extend(additonalSongs)
#
# print(hitsToRead.count('WISH YOU WERE HERE'))
# print(hitsToRead.count('RIDERS ON THE STORM'))
#
# hitsToRead.clear()



#TUPLE (KROTKA) - statyczne listy (nie można ich modyfikować)

# Tax = (4, 7, 8, 23)
#
# print(Tax)
# print(Tax[2])
# print(Tax[-1]) #indeksowanie od końca
#
# print(Tax.index(7)) #na której pozycji znajduje się dane element
# print(Tax.count(8)) #ile razy wskazany argument występuje w statycznej liście
# print(max(Tax)) #jaka jest maksymalna wartość występująca w liście
#
# TaxList = list(Tax) #konwertowanie na listę
# TaxList.append(30) #dodawanie wartości
# NewTax = tuple(TaxList) #utworzyliśmy nowy tuple
#
# (tax1,tax2,tax3,tax4) = Tax #jedna instrukcja - zainicjowane 4 zmienne
#
# #chuj wie o co tu chodzi
# a = 1
# b = 10
# print("a =",a,"\tb =",b)
# temp = a #chwilowa zmienna, do której wpisujemy tymczasową wartość zmiennej
# a=b
# b=temp
# print("a =",a,"\tb =",b)

#zadanka

# marketing = ['loyality program', 'client promotion', 'market research']
# marketing.append('public relations')
# print(marketing[2])
# marketing.insert(2,'investor relations')
#
# emailMarketing = marketing.copy()
# emailMarketing.sort()
#
# internalEmails = ['internal communication']
#
# emailMarketing.extend(internalEmails)
#
# print(tuple(emailMarketing))




#DICTIONARY - słowniki

# CountryLeaders = {'PL':'Duda','US':'Trump'} #są tu tylko dwa elementy jbc (każdy składa się zdwóch elementów)
#
# print(CountryLeaders)
#
# print(CountryLeaders['US']) #w tym przypadku zwraca Trump
#
# CountryLeaders['DE'] = 'Merkel' #żeby dodać nowe wyrażenie do słownika odwołujemy się do nowego klucza i przypisujemy wartość
# # print(CountryLeaders.keys()) #zwraca klucze
# # print(CountryLeaders.values()) #zwraca wartości
# # print(CountryLeaders.items()) #zwraca elementy
#
# # print(CountryLeaders.popitem()) #pobierze jeden z elementów i usunie go z listy
# # print(CountryLeaders.setdefault('FR','Macron'))
# # print(CountryLeaders.get('RU'))
#
# #aktualizacja wartości
# newLeaders = {'RU':'Putin','DE':'Schulz'}
# print(newLeaders)
# CountryLeaders.update(newLeaders) #aktualizuje dane obiekty - jeśli wartość zostanie znaleziona to ją zmienia, a jeśli nie to element zostanie dodany
# print(CountryLeaders)


#zadanka

# chanels = {'Google':1480,'Email':300,'Natural Traffic':440,'TV Spot':700}
# print(chanels)
#
# print(chanels['Email'])
#
# chanelsUpdate = {'Natural Traffic':520,'News':600}
#
# chanels.update(chanelsUpdate)
# print(chanels)
# print(chanels.pop('Email'))




#IF

# age = 27
#
# if age >= 18:
#     print("You are adult and you can buy alcohol")
# else:
#     print("You are too young to buy alcohol")
#
# isDrunk = False
#
# if age >= 18 and not isDrunk:
#     print("You are adult and you can buy alcohol")
# else:
#     print("Sorry, we cannot sell you alcohol")
#
# isRestrictedArea = False
#
# if age >= 18 and not isDrunk and not isRestrictedArea:
#     print("You are adult and you can buy alcohol")
# else:
#     print("Sorry, we cannot sell you alcohol")
#
# print(123)

#zadanka
# MIN_LIKES = 500
# MIN_SHARES = 100
#
# allLikes = 51111
# allShares = 2111

# if MIN_LIKES <= allLikes and MIN_SHARES <= allShares:
#     print('There are 10% discount on our stuff')
# else:
#     print('There are not any discount')
#
#
# isPizzaOrdered = True
# isBigDrinkOrdered = False
# isWeekend = False
#
# if (isPizzaOrdered or isBigDrinkOrdered) and not isWeekend:
#     print('Burger free')
# else:
#     print('Buy more or not come when weekend is')
#
#
#
#
# diskSize = 140
# diskSizeUsed = 133
# fileSize = 3
# freeMemory = diskSize - diskSizeUsed
#
# if freeMemory > fileSize:
#     print('File can be downloaded')
# else:
#     print('There are not enought free memory on your disk')





#IF i ISELF

# age = 27
# isDrunk = False
# isRestrictedArea = True

#chujowszy sposób
# print('--Chujowszy sposób--')
# if age < 18:
#     print('You are yo young to buy alcohol')
# else:
#     if isDrunk:
#         print('Are you drunk? We cannot sell you alcohol')
#     else:
#         if isRestrictedArea:
#             print("Restricted area. Alcohol is forbidden")
#         else:
#             print('OK, you can buy alcohol')

#lepszy sposób
# print('--Lepszy sposób--')
#
# if age < 18:
#     print('You are yo young to buy alcohol')
# elif isDrunk:
#     print('Are you drunk? We cannot sell you alcohol')
# elif isRestrictedArea:
#     print("Restricted area. Alcohol is forbidden")
# else:
#     print('OK, you can buy alcohol')
#

#zadanka
MIN_LIKES = 500
MIN_SHARES = 100

allLikes = 5
allShares = 212


# if MIN_LIKES <= allLikes and MIN_SHARES <= allShares:
#     print('There are 10% discount on our stuff')
# else:
#     print('There are not any discount')
#
# if allLikes < MIN_LIKES:
#     print("There is no discount. Not enough likes")
# else:
#     if allShares < MIN_SHARES:
#         print("There is no discount. Not enough shares")
#     else:
#         print('There is 10% discount')

#
# if allLikes < MIN_LIKES:
#     print('There is no discount. Not enough likes')
# elif allShares < MIN_SHARES:
#     print("There is no discount. Not enough shares")
# else:
#     print('There is 10% discount')





#TERNARY OPERATOR - dziwna składna if

# itRains = True
#
# if itRains:
#     print('We stay at home')
# else:
#     print('We go out')
#
# print('we stay at home' if itRains else "we go out")
#
# #zadanka
# musclePain = False
# fever = True
# weakness = True
# isMan = True
#
# if musclePain and fever and weakness:
#     print('suspiction of infuenza')
# else:
#     print('The flue is unlikely')
#
#
# if musclePain and fever and weakness:
#     print('suspiction of infuenza')
# elif weakness and not musclePain and not fever:
#     print('Just take a rest')
# else:
#     print('You may be cold')
#
# if musclePain and fever and weakness and isMan:
#     print('suspiction of infuenza')
# elif musclePain and isMan and not fever and not weakness:
#     print('suspiction of infuenza (but man')
# elif fever and isMan and not musclePain and not weakness:
#     print('suspiction of infuenza (but man')
# elif weakness and isMan and not musclePain and not fever:
#     print('suspiction of infuenza (but man')
# else:
#     print('Healthy')



#PĘTLE WHILE/ELSE

# i = 1
# imax = 10
#
# while i <= imax :
#     print('I like Python', i)
#     i+=1
# else:
#     print("Now i =",i) #po zakończeniu pętli można wyświetlić ostatni kumunikat (specyficzne dla Python)

#zadanka
# firstRow = 1
# lastRow = 31
# currentRow = firstRow
#
# while currentRow <= lastRow :
#     print('Row number:', currentRow)
#     currentRow+=1


# i = 1
# iMax = 13
#
# while i <= iMax :
#     print(i, i**2, i**3)
#     i+=1

# i = 1
# iMax = 10
#
# while i <= iMax:
#     print(i*"x")
#     i+=1



#IF w WHILE odc 80 (jak kiedyś to zobacze to muszę powtórzyć)

# values = [10,43,12,48,12,11,18,98,57,28,19,27,49,19,74]
#
# i = 0
# max = len(values) - 2 #wylicza długoścć tabeli
# # print(max)
#
# while i<max:
#     print(i,values[i], values [i+1], values [i+2])
#     if(values[i]<values[i+1] and values[i+1]<values[i+2]):
#         print('\tFound: ',values[i],values[i+1],values[i+2])
#     i+=1

#zadanka

# numbers = [8, 18, 2, 4, 16, 5, 25, 4, 22, 3, 3, 5, 3, 9, 81, 11]
# i = 0
# maximum = len(numbers) - 1
#
# while i<maximum:
#     print(numbers[i],numbers[i+1])
#     i+=1

# cargo = [40,20,4,5,30,8,2,7,3,19,32,40,20,35,15,32,9]
# cargo.sort()
# cargo.reverse()
#
# print("The cargo list is:",cargo)
#
# boxCapacity = 90
# box = []
# i = 0
#
# while sum(box) + cargo[i] < boxCapacity and i<len(cargo):
#     box.append(cargo[i])
#     i+=1
#
# print("The collected items sum is:",sum(box)) #funkcja sumująca elementy przekazane jako parametr
# print('The elements are: ',box)



# PĘTLA FOR

# persons = ['Elizabeth','Steven','Sebastian','Margaret','Svietlana','Raphael']
#
# domain = 'mycompany.com'
#
# for person in persons:
#     email = person + "@" + domain
#     print("Email for\t", person,'\tis\t',email)
# else:
#     print('-- end of the list --')


# data = ['Error:File cannot be open',
#         'Error:No free space on disk',
#         'Error:File missing',
#         'Warning:Internet connection lost',
#         'Error:Access denied']
#
# def funkcja(a):
#     b = a +100
#     return b
#
# print(funkcja(2))


#liczenie dni na instagramie

liczbaTygodni = 55

def ileToDni(liczbaTygodni):
    return liczbaTygodni * 7

for x in range(10):
    print("Paulin")



