# Herzblechbuben Website

Sieben handgeschriebene HTML-Seiten, kein Build-Prozess, kein Framework.
Deployment über GitHub Pages (öffentliches Repository).

## Dateien
```
index.html          Startseite (Hero, Teaser, Bild-Text, Schlussaufruf)
ueber-uns.html      Vorstellung (Einleitung + Personenraster)
termine.html        Terminliste
downloads.html      Downloadkarten
kontakt.html        Kontakt (Bild-Text + Kontaktdaten)
impressum.html      Pflichtangaben nach § 5 DDG
datenschutz.html    Hinweise nach Art. 13 DSGVO
style.css           gemeinsames Stylesheet für ALLE Seiten
script.js           Mobilmenü + Zurück-nach-oben
images/             Platzhalterbilder (SVG), noch zu ersetzen
```

## Designsystem
- Einspaltiges, gestapeltes Layout
- Farben: Beige, Taupe, Waldgrün, Dunkelbraun, Grau
- Eckige Buttons, keine abgerundeten Ecken
- Container 1420px
- Schriften über Google Fonts

## Bausteine
| Klasse | Zweck |
|---|---|
| `.hero` | Kopfbereich über volle Bildschirmhöhe; `.seitenkopf` = Variante der Unterseiten |
| `.section` | normaler Abschnitt; `.is-tinted` = leicht abgesetzt, `.has-bild` = mit Hintergrundbild |
| `.wrap` | Inhaltsbreite 1420px; `.is-narrow` = 1000px für Fließtext |
| `.band` | farbiges Trennband zwischen Abschnitten |
| `.grid` + `.grid-2/3/4` | Raster, bricht auf Mobil automatisch um |
| `.split` | Bild neben Text; `.is-reverse` dreht die Seiten |
| `.button` | Umriss-Button; `.is-small`, `.is-light` (für dunkle Flächen) |
| `.teaser` | Kachel auf der Startseite |
| `.person` | Personenkarte auf ueber-uns.html |
| `.termin` | eine Zeile der Terminliste |
| `.download` | eine Downloadkarte |
| `.rechtstext` | Gliederung in Impressum und Datenschutz |
| `.ph-badge`, `.ph-box`, `.ph-text` | Platzhalter-Markierung, beim Befüllen entfernen |

## Bilder
Hero, Seitenkopf, Trennband und Hintergrund werden über Tokens in style.css gesetzt:
`--bild-hero`, `--bild-seitenkopf`, `--bild-band`, `--bild-hintergrund`.
Inhaltsbilder (`inhalt-*`, `portrait-*`, `logo-*`, `icon`) stehen direkt im HTML per `src`.
Am einfachsten: eigene Datei mit demselben Namen in `images/` legen.

## Navigation
Steht in jeder HTML-Datei zweimal (Hauptmenü + Mobilmenü).
Wer Seiten hinzufügt oder umbenennt, muss beides anpassen.

## Regeln
- Gesamtes CSS in der gemeinsamen style.css, keine <style>-Blöcke in den HTML-Dateien.
  (Ersetzt die frühere Inline-Regel: bei sieben Seiten müsste der Block sonst
  siebenmal gepflegt werden.)
- Farben, Schriften und Maße ausschließlich über die Design-Tokens unter
  „1. Design-Tokens" in style.css ändern, nicht verstreut im Stylesheet
- Deutsches Recht: Impressum nach § 5 DDG, Datenschutz nach Art. 13 DSGVO
- Keine privaten Kontaktdaten außer den Pflichtangaben im Impressum
- E-Mail-Adressen bot-sicher einbauen, nie als Klartext-mailto
  (Mechanismus: `class="js-mail"` + `data-benutzer`/`data-domain`, Zusammenbau in script.js)
- Beim Befüllen sinnvolle alt-Texte eintragen; derzeit sind sie leer bzw. generisch
- Rechtstexte sind nur ein Gliederungsgerüst und gehören juristisch geprüft eingesetzt
