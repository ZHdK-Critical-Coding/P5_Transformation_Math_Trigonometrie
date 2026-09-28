# P5.js: Trigonometry

[English](readme.md)

Visualisiert `sin()`, `cos()` und `tan()` als drei animierte Punkte, die
über den Bildschirm laufen und eine Spur hinter sich herziehen. Jede Kurve
ist eine Instanz einer kleinen Klasse, so lassen sich Frequenz,
Geschwindigkeit und Spur pro Kurve einstellen. Hilfreich, um ein Gefühl für
die Winkelfunktionen zu bekommen und schwingende Bewegungen zu bauen.

## Installation

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).

## Coding-Hilfe

- **`sketch.js` → `setup()`**: erstellt eine fensterfüllende Zeichenfläche
  und fügt `curves` drei Kurven hinzu: `sin` in Rot, `cos` in Grün, `tan`
  in Blau. Hier Kurven hinzufügen, entfernen oder ändern.
- **`draw()`**: löscht den Hintergrund mit `backgroundColor` und ruft `draw()` jeder Kurve auf.
- **`class trigonometryCurve`**: Der Konstruktor nimmt die Funktion, die
  Farbe und optional `frequency` (Anzahl Perioden über die Breite, Standard
  2), `trailSize` (Anzahl gespeicherter Punkte, 100), `speed` (Grad pro
  Frame, 2) und `dotsize` (25). Er setzt `angleMode(DEGREES)`.
- **`trigonometryCurve.draw()`**: berechnet x aus `frameCount` (am rechten
  Rand beginnt es wieder links) und y aus der Winkelfunktion, speichert den
  Punkt und behält nur die letzten `trailSize` Punkte. Ältere Punkte werden
  kleiner gezeichnet und gehen in die Hintergrundfarbe über
  (`backgroundColor`, gemischt mit `lerpColor()`). y wird mit einem Viertel
  der Höhe um die Mitte skaliert; Punkte, die ausserhalb der Zeichenfläche
  landen würden (`tan()` in der Nähe der Polstellen), werden übersprungen.
