---
ref: xi-q-delta
layout: page
title: Delta
description: Customizing Check
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 4
lang: de_DE
progressstate: 5
---

Um einen echten Delta-Prozess zum Laufen zu bringen, muss Delta zunächst initialisiert werden. Eine Übersicht über die Modi finden Sie unter [Update-Modus](./update-modus).

### Schritt 1: Delta Initialisierung [C]
In diesem Modus werden alle Daten angefordert, die den von Ihnen eingestellten Auswahlkriterien entsprechen.

Stellen Sie den **Update-Modus** auf *Delta-Initialisierung* und führen Sie ihn aus.<br>
Die Initialisierungsselektionen werden kopiert, um die Deltasätze zu laden. Sie können das Delta-Update verwenden.

{: .box-note } 
**Hinweis:** Wenn Sie einen Delta-Prozess neu initialisieren, löschen Sie zunächst alle vorhandenen Inits (Initialisierungsanforderungen), indem Sie in den DeltaQ-Extraktionseinstellungen auf **[Request Maintenance]** klicken.

### Alternativer Schritt 1: Delta Init (ohne Daten) [S]
Sie entspricht der **Delta-Initialisierung**, ohne Daten aus der SAP-Datenquelle zu extrahieren.
Nach der Ausführung der **Delta Init** können Sie das **Delta Update** verwenden.

{: .box-note } 
**Hinweis:** Wenn Sie einen Delta-Prozess neu initialisieren, löschen Sie zunächst alle vorhandenen Inits (Initialisierungsanforderungen), indem Sie in den DeltaQ-Extraktionseinstellungen auf **[Request Maintenance]** klicken.

### Schritt 2: Delta-Update [D]
Das Delta-Update extrahiert nur Daten, die seit der letzten Delta-Anforderung im SAP-System hinzugefügt oder geändert wurden.

Führen Sie Ihr Paket zunächst einmal aus und setzen Sie dann den **Update-Modus** auf *Delta-Update*.
Es werden nur die Änderungen extrahiert, die seit der letzten Übertragung vorgenommen wurden.

{: .box-note } 
**Hinweis:** Um Fehler, Abbrüche und Lücken zu vermeiden, führen Sie die nächste Extraktion im Update-Modus *Wiederholen* durch.

### Optional: Wiederholen [R]
Wiederholt den letzten Deltalauf und aktualisiert alle Daten, die seit dem letzten Lauf aufgelaufen sind. Wenn der letzte Lauf nicht erfolgreich war, werden alle Daten des letzten Delta-Updates gelöscht, bevor ein neuer Lauf gestartet wird.<br>
Ein **Wiederholungslauf** kann mehrmals gestartet werden.

Viele Datenquellen liefern das Feld ROCANCEL. Dieses Feld legt fest, ob die Datensätze in Abhängigkeit von der Delta-Verfahrensart der Datenquelle ergänzt oder überschrieben werden. Es definiert, wie ein Datensatz im Delta-Verfahren aktualisiert wird.<br>
In einem ABR-Modus: <br>
* *'Blank'* gibt ein Nachbild zurück,<br>
* *'X'* gibt ein Vorher-Bild zurück,<br>
* *'D'* löscht den Datensatz und<br>
* *'R'* gibt ein umgekehrtes Bild zurück.

### Optional: Delta-Queue - RSA7
Sobald Delta aktiviert ist, können Sie in der SAP-Transaktion RSA7 die in der Delta-Queue anstehenden Datensätze einsehen.

![Delta](/img/content/Delta.png){:class="img-responsive"}

Wenn im Moment keine neuen Daten zu übertragen sind, wird eine entsprechende Protokollmeldung vermerkt und die Datenpipeline bleibt leer.

{: .box-note } 
**Hinweis:** Bevor Sie das nächste Update einleiten, stellen Sie sicher, dass ein Delta-Update ordnungsgemäß ausgeführt wurde. Durch das Ausführen eines neuen Delta-Updates wird das letzte Update entfernt. 


*****
#### Freigegebene Links
- [Delta Transfer to BI](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-US/37/4f3ca8b672a34082ab3085d3c22145/content.htm?no_cache=true)
- [Delta Process](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.23/en-US/4f18f6aa3fca410ae10000000a42189d.html)
- [Delta Verfahren](http://help.sap.com/saphelp_nw73/helpdata/de/4f/18f6aa3fca410ae10000000a42189d/content.htm).
