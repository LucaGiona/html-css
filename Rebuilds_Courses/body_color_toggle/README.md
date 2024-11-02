
# Custom Properties & Transform & Transition
[Zur deutschen Version](#deutsche-version)

### Overview
This webpage includes a **Light/Dark mode toggle switch** that dynamically changes the text and background colors using CSS variables. The switch uses an invisible checkbox to control the color changes.

### Structure

1. **Light/Dark Mode Toggle**:
   - An invisible `<input type="checkbox">` serves as the toggle mechanism.
   - The visual switch is created with a `label` and `toggle-wrapper` that house the toggle ball.

2. **Color Adjustment via CSS Variables**:
   - Default Mode: `--clr-txt` is set to black, and `--clr-bg` is pink.
   - Dark Mode: `--clr-txt` changes to white, and `--clr-bg` to black when the toggle is activated.

3. **Interaction**:
   - Activating the toggle moves the `toggle-ball` inside the `toggle-wrapper`.
   - This movement visually indicates the change to Dark Mode.

### Installation
Clone the repository and open the main file in your browser:

```bash
git clone <repository-url>
cd custom-properties
open index.html
```

### Usage
1. Open `index.html` to view the page.
2. Use the toggle switch to switch between Light and Dark mode.
3. Observe how the toggle ball shifts to visually indicate the mode change.

---

## Deutsche Version

### Projektübersicht
Diese Webseite enthält einen **Licht/Dunkel-Modus-Schalter**, der über CSS-Variablen dynamisch Text- und Hintergrundfarben anpasst. Der Schalter verwendet eine unsichtbare Checkbox zur Steuerung der Farbänderungen.

### Struktur

1. **Licht/Dunkel-Modus-Schalter**:
   - Ein unsichtbares `<input type="checkbox">` dient als Umschaltmechanismus.
   - Der visuelle Schalter besteht aus einem `label` und `toggle-wrapper`, die die Schalterkugel enthalten.

2. **Farbanpassung über CSS-Variablen**:
   - Standardmodus: `--clr-txt` ist schwarz, `--clr-bg` ist rosa.
   - Dunkelmodus: Bei aktivem Schalter wechselt `--clr-txt` zu weiß und `--clr-bg` zu schwarz.

3. **Interaktion**:
   - Beim Umschalten bewegt sich die Schalterkugel (`toggle-ball`) im `toggle-wrapper`.
   - Diese Bewegung zeigt den Wechsel in den Dunkelmodus visuell an.

### Installation
Klone das Repository und öffne die Hauptdatei im Browser:

```bash
git clone <repository-url>
cd custom-properties
open index.html
```

### Verwendung
1. Öffne `index.html`, um die Seite anzuzeigen.
2. Nutze den Schalter, um zwischen Licht- und Dunkelmodus zu wechseln.
3. Beobachte, wie die Schalterkugel den Moduswechsel visuell anzeigt.

---
