---
ref: xi-open-hub-service-ohs-02
layout: page
title: Suchen einer OHS-Extraktion
description: Suchen einer OHS-Extraktion
product: xtract-is
parent: open-hub-service
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=suchen-einer-ohs-extraktion
progressstate: 5
---

### Look Up
Klicken Sie im Hauptfenster der Komponente auf **Look Up** (Binokularsymbol), um eine OHS-Extraktion nachzuschlagen.
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
Sie können entweder nach InfoSpoke, Destination oder Process Chain suchen. Sie können bei der Suche auch Wildcards ( * ) verwenden.
![OHS-Search-001](/img/content/xis/OHS-Search-001.png){:class="img-responsive" }
Nachdem Sie Ihre Auswahl getroffen haben, werden alle Metadaten aus dem BW geholt und im Hauptfenster der Komponente angezeigt.
![OHS-Search-002](/img/content/xis/OHS-Search-002.png){:class="img-responsive" }

### Extraktionstypen

Die Art der Extraktion wird durch drei Fälle definiert: <br>
**P - Trigger Process Chain**<br>
Die angegebene Prozesskette wird gestartet, die Extraktion durchgeführt und nach Beendigung der Extraktion werden die Daten paketweise extrahiert.<br>
**W – Wait for Notify**<br>
Es wird keine Prozesskette gestartet. Das Werkzeug wartet auf die Benachrichtigung über den Abschluss der Extraktion. Eine andere Instanz ist für den Start der Extraktion zuständig (z.B. der SAP-eigene Scheduler). <br>
**E – Extract Only**<br>
Weder wird eine Prozesskette gestartet, noch wird eine Benachrichtigung über den Abschluss einer Extraktion abgewartet. Die im Feld *Request-ID* eingegebene Request-ID wird verwendet, um Daten abzurufen, die sich hinter dem jeweiligen Request verbergen. Es können nur Daten der letzten Anforderung für die jeweilige Arbeitsschutz-Destination extrahiert werden. Daten früherer Anforderungen können nicht extrahiert werden.
