// Event Delegation w JavaScript to technika, która polega na dodaniu jednego nasłuchiwacza zdarzeń do elementu nadrzędnego zamiast dodawania go do wielu potomków. Wykorzystuje propagację zdarzeń (event bubbling), co poprawia wydajność i upraszcza zarządzanie zdarzeniami.

// Event Delegation w JavaScript to technika, która polega na dodaniu jednego nasłuchiwacza zdarzeń do elementu nadrzędnego zamiast dodawania go do wielu potomków. Wykorzystuje propagację zdarzeń (event bubbling), co poprawia wydajność i upraszcza zarządzanie zdarzeniami.

// Zamiast przypisywać click do każdego przycisku:
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => console.log("Kliknięto!"));
});

// Lepiej dodać event listener do elementu nadrzędnego:
document.querySelector("#container").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
      console.log("Kliknięto przycisk:", event.target.textContent);
  }
});