# instalowanie paczek zwykłych, które instalują się w dependencies
npm i <nazwa_paczki>

# instalowanie paczek potrzebnych tylko w developmencie (devDependencies)
npm i <nazwa_paczki> -D

# instalowanie paczek globalnie (paczka jest zainstalowana na komputerze - dostęp do niej uzyskujemy w każdym projekcie)
npm install <nazwa_paczki> -g (lub --global)

https://www.npmjs.com/package/nodemon
uruchamianie nodemona jesli jest zainstalowany w lokalnie - patrzeć w docs
npx nodemon <nazwa_apliacji>

# node-sass - paczka do kompilowania scss
npx node-sass <input> <output>
ex. npx node-sass sass/style.scss css/style.css