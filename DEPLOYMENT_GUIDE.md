# Deployment-Guide: JavaScript-Bundle-Auslieferung

## Problem

Bei der Bereitstellung von Single Page Applications (SPAs) auf Netlify oder ähnlichen Plattformen kann es zu Problemen kommen, wenn JavaScript-Bundles nicht korrekt ausgeliefert werden. Dies führt zu Fehlern wie:

- 404-Fehler für `/assets/index-*.js`
- Falsche MIME-Type-Fehler (HTML statt JavaScript)
- Weißer Bildschirm beim Laden der Seite

## Ursache

Die häufigste Ursache ist eine falsch konfigurierte `_redirects`-Datei, die **alle** Anfragen (einschließlich statischer Assets) an `index.html` umleitet.

### Problematische Konfiguration:
```
/*    /index.html   200!  # Das "!" erzwingt die Umleitung AUCH für existierende Dateien
```

## Lösung

### 1. Korrekte `_redirects`-Konfiguration

Die Datei `public/_redirects` wurde korrigiert:

```
# Umlaut redirects - normalize German umlauts to their ASCII equivalents
/haushaltsauflösung       /haushaltsaufloesung       301!
/entrümpelung             /entruempelung             301!
/sperrmüll-entsorgung     /sperrmuell-entsorgung     301!
/gewerbe-entrümpelung     /gewerbe-entruempelung     301!
/immobilienräumung        /immobilienraeumung        301!
/möbel-entsorgung         /moebel-entsorgung         301!

# SPA fallback - serve index.html for non-existing routes only
# Without the ! force flag, Netlify serves existing files first (assets, images, etc.)
# Only non-existing paths fall back to index.html for client-side routing
/*    /index.html   200
```

**Wichtig:** OHNE das `!` (Force-Flag) am Ende:
- Netlify prüft **zuerst**, ob eine Datei existiert
- Existierende Dateien (JS, CSS, Bilder) werden **direkt** ausgeliefert
- Nur nicht-existierende Pfade fallen auf `index.html` zurück (für Client-Side-Routing)

### 2. Netlify Headers-Konfiguration

Die `netlify.toml` wurde erweitert für optimale Asset-Auslieferung:

```toml
[build]
  publish = "dist"

# Ensure proper MIME types for JavaScript and CSS files
[[headers]]
  for = "/assets/*"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.js"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"

[[headers]]
  for = "*.css"
  [headers.values]
    Content-Type = "text/css; charset=utf-8"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

**Vorteile:**
- Explizite MIME-Types verhindern falsche Content-Type-Header
- Aggressive Caching für hashed Assets (`index-[hash].js`)
- Kein Caching für `index.html` (damit neue Builds sofort verfügbar sind)

### 3. Build-Prozess-Verifizierung

Der Build-Prozess ist wie folgt:

```bash
npm run build
```

Dies führt aus:
1. `build:client` - Erstellt Client-Bundle in `dist/client/`
2. `build:server` - Erstellt SSR-Bundle in `dist/server/`
3. `prerender` - Generiert statisches HTML für alle Routen
4. `build:finalize` - Verschiebt Dateien nach `dist/` und bereinigt

**Verifizierung nach dem Build:**
```bash
# Asset-Dateien existieren
ls -lh dist/assets/index-*.js

# HTML referenziert korrekte Dateien
grep "script.*module.*src" dist/index.html

# Manifest ist korrekt
cat dist/.vite/manifest.json
```

## Absicherung für zukünftige Deploys

### 1. Pre-Deploy-Check-Script

Fügen Sie ein optionales Verifizierungsskript zu `package.json` hinzu:

```json
{
  "scripts": {
    "verify:build": "node scripts/verify-build.mjs"
  }
}
```

### 2. Monitoring

Nach dem Deployment:
- Prüfen Sie die Netzwerk-Console im Browser
- Stellen Sie sicher, dass `/assets/index-*.js` mit Status 200 geladen wird
- Verifizieren Sie, dass der Content-Type `application/javascript` ist

### 3. Häufige Fehlerquellen

**Problem:** Assets werden nicht gefunden (404)
- **Lösung:** Prüfen Sie, ob `dist/` die Assets enthält
- **Lösung:** Prüfen Sie `_redirects` auf das `!` Force-Flag

**Problem:** MIME-Type-Fehler (HTML statt JavaScript)
- **Lösung:** Entfernen Sie das `!` von der SPA-Fallback-Regel
- **Lösung:** Fügen Sie explizite Header in `netlify.toml` hinzu

**Problem:** Alte Bundles werden gecached
- **Lösung:** HTML-Dateien dürfen nicht gecached werden
- **Lösung:** Vite nutzt Content-Hashing für Assets (automatische Cache-Invalidierung)

## Test-Anleitung

### Lokal testen:
```bash
# Build erstellen
npm run build

# Preview-Server starten
npm run preview

# Assets testen
curl -I http://localhost:4173/assets/index-*.js
# Erwartet: HTTP/1.1 200 OK, Content-Type: text/javascript

# HTML-Referenz testen
curl -s http://localhost:4173/ | grep "script.*module"
# Erwartet: <script type="module" crossorigin src="/assets/index-*.js">
```

### Nach dem Deployment:
```bash
# Asset-Status prüfen
curl -I https://your-domain.com/assets/index-[hash].js

# Sollte zurückgeben:
# HTTP/2 200
# content-type: application/javascript
# cache-control: public, max-age=31536000, immutable
```

## Zusammenfassung

✅ **Korrekte `_redirects`** - Keine Force-Flag für SPA-Fallback  
✅ **Explizite Headers** - MIME-Types und Caching in `netlify.toml`  
✅ **Build-Verifizierung** - Assets existieren und werden korrekt referenziert  
✅ **Dokumentation** - Dieses Guide für zukünftige Referenz  

Mit diesen Änderungen ist sichergestellt, dass nach jedem Build die JavaScript-Bundles korrekt generiert, referenziert und ausgeliefert werden.
