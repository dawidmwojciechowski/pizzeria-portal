# Dashboard
- '/'
    - statystyki dzisiejszych zamówień (zdalen i lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
    - pola na login i hasło
    - guzik do zalogowania (link do dashboard-u)

# Widok dostępności stolików

- '/tables'
    - wybór daty i godziny
    - tabla z listą rezerwacji oraz wydarzeń
        - gdzie każda kolumna będzie jednym stolikiem
        - gdzie każdy wiersz będzie blokiem 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięciu rezewacji lub eventu przechodzimy nad stronę szczegółów

- '/tables/booking/:id
    - zawiera wszystkie informacje dotyczące rezerwacji
    - musi umożliwiać edycję i zapisanie zmian

- '/tables/booking/new
    - analogicznie do poprzedniej z tym że bez początkowych informacji

- '/tables/events/:id
    - analogicznie do powyższych, dla eventów



# Widok kelnera

- '/waiter'
    - tabela, która w wierszach wyświetla stoliki
    - w kolumnach infomracje o statusie danego stolika, czas od ostatniej aktywności
    - w ostatniej kolumnie znajdą się dostępne akcje

- '/waiter/order/new'
    - numer stolika (edytowalny)
    - menu produktów dostępnych w restauracji
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwota zamówienia

- '/waiter/order/:id
    - analogiczna jak powyższa - z wprowadzoną cześcią  informacji

# Widok kuchni

- '/kitchen'
    - wyświetlanie listy zamówień w kolejności ich złożenia
    - lista zawiera numer stolika lub zamówienia zdalenego oraz pełne infomacje dotyczące zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

