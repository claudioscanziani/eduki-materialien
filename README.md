# Sprachen-Werkstatt Oberstufe

Statische Website für Unterrichtsmaterialien, die über [Eduki](https://eduki.com) verkauft werden. Die Seite richtet sich an Lehrkräfte in der gymnasialen Oberstufe und stellt derzeit zwei Angebote vor: die Spanisch-Reihe „Vidas conectadas“ und das Abitur Skills Pack Englisch, beide ausgerichtet auf die Berliner Prüfungsschwerpunkte 2027/2028.

Veröffentlicht mit GitHub Pages: <https://claudioscanziani.github.io/eduki-materialien/>

## Seiten

- `index.html` – Startseite
- `impressum.html` – Impressum (Platzhalter, vor Veröffentlichung ausfüllen)
- `datenschutz.html` – Datenschutzhinweise (Platzhalter, vor Veröffentlichung ausfüllen)

Die Links „Auf Eduki ansehen“ sind Platzhalter (`href="#"`), bis die Angebote auf Eduki online sind. Im HTML steht an beiden Stellen ein TODO-Kommentar.

## Veröffentlichen

Ein Push auf `main` startet `.github/workflows/pages.yml` und legt den Inhalt des Repositorys auf GitHub Pages. Unter Einstellungen → Pages muss die Quelle „GitHub Actions“ gewählt sein.

Vor dem öffentlichen Betrieb Impressum und Datenschutz ergänzen: alle Stellen mit `[ausfüllen]` und das Platzhalter-Portrait auf der Startseite.
