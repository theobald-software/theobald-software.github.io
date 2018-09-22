---
layout: page
title: Einen Extraktor definieren
description: Einen Extraktor definieren
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=stammdaten-im-full-update
---

Ziehen Sie eine DeltaQ-Komponente in den Datenflusstask und verknüpfen Sie diese wie gewohnt mit dem ConnectionManager.

**Schritt 1: Extraktor suchen**

Im leeren Dialog klicken Sie auf den Fernglas-Button, um eine OLTP-Quelle im SAP zu suchen.<br>
Das folgende Beispiel zeigt den Download von Materialstammdaten aus der DataSource 0MATERIAL_ATTR.

![search-ds-mat-attr](/img/content/search-ds-mat-attr.png){:class="img-responsive"}

**Schritt 2: Customzing Überprüfen** 

Prüfen Sie die Customizing-Einstellungen mit dem Link Customizing Check, falls Sie das noch nicht getan haben.

**Schritt 3: Update Mode setzen** 

Das Feld Update Mode ist standardmäßig auf *F - Full* gesetzt.<br> 
Damit wird der gesamte Datenbestand aus SAP geholt, ohne einen Delta-Meschanismus zu initialisieren. Wir behalten diese Einstellung. 

**Schritt 4: Spalten wählen**

Nun müssen Sie noch Häkchen in die Spalten setzen, die Sie gerne extrahieren wollen. Alternativ können Sie auf Select All klicken, um alle Spalten zu wählen. <br>
Ihre Maske sollte dann wie folgt aussehen:

![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.jpg){:class="img-responsive"}

**Schritt 5: Extraktor aktivieren** 

Nun können Sie diesen Extraktor im SAP für dieses logische RFC-Zielsystem aktivieren (Button Activate). <br>
Sollte die Aktivierung erfolgreich vonstattengehen, erscheinen entsprechende Meldungsboxen:

![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"} 
![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

Nach erfolgreicher Aktivierung steht die Extraktionsfunktionalität zur Verfügung.

Die Aktivierung muss für den Init und Full Mode ausgeführt werden. <br>
Vor einer neuen Aktivierung müssen Sie immer die alte löschen, siehe Request Maintenance in den Settings. <br>
Machen Sie keine Aktivierung für den Delta Update Modus oder den Repeat Modus. 

**Variablen** können für die folgenden Eigenschaften verwendet werden: Log. Destination, Gateway Host, Gateway Service und Program ID. Darüber hinaus kann der Update Mode auch über eine Variable gesteuert werden. 

**Um Parameter / Filter** zu setzen, siehe Abschnitt Datasource-Parameter.
  
Bei Fehlern bitte auf der Seite [DeltaQ Troubleshooting Guide]() (Englisch) nachschlagen.