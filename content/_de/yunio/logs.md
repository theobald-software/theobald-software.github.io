---
ref: yunio-08
layout: page
title: Logs
description: Logs
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 32
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---

Dieser Abschnitt enthält Informationen über die Server-Logs, die von yunIO erstellt werden.<br>

### Logs anzeigen lassen
Öffnen Sie die Logs unter dem Menüpunkt *Logs*. <br>
Das Menü besteht aus zwei Abschnitten:
- Zeitstempel der Logs (1)
- Inhalt der Logs (2)

Klicken Sie auf einen Zeitstempel, um die dazugehörigen Logs anzuzeigen.<br>
![yunIO-Logs](/img/content/yunio/yunIO-Logs.png){:class="img-responsive"}

### Logs lesen

Die Logs werden pro TCP-Verbindung erstellt.

| Zeit | Typ | Quelle | Nachricht | 
|--------|--------|--------|---|
| PT00H00M43.777S | D | ExecutionCore: | Extraction finished, firing callback.  | 

#### Zeit

Der Zeitstempel in den Logs ist angegeben als pazifische Zeit (<span style="color:orange">PT</span>) in Stunden (<span style="color:green">H</span>), Minuten (<span style="color:blue">M</span>) und Sekunden (<span style="color:red">S</span>). <br>
Beispiel: <span style="color:orange">PT</span><span style="color:green">00H</span><span style="color:blue">00M</span><span style="color:red">43.777S</span>

#### Typ
Jeder Logeintrag ist einem der folgenden Typen zugewiesen:
- **E - Errors:** Fehlermeldungen, die während des Extraktionsprozesses ausgegeben werden.<br>
- **I - Information:** Statusmeldungen, über Vorgänge, die nicht zu einem Fehler führen.<br>
- **W - Warnings:**  Informationen über Probleme, die nicht zu einem Extraktionsfehler führen. Zum Beispiel Authentifizierungsfehler.<br>
- **D - Debug Details:** detaillierte Informationen, die helfen, den Grund für aufgetretene Fehler zu finden.

#### Struktur/Beispiel