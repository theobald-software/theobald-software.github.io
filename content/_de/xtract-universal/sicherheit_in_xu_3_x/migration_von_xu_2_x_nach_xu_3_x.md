---
ref: xu-security-xu3-04
layout: page
title: Migration von XU 2.x nach XU 3.x
description: Migration von XU 2.x nach XU 3.x
product: xtract-universal
parent: sicherheit_in_xu_3_x
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=migration_von_xu_2_x_nach_xu_3_x
---
Die Migration von XU 2.x auf XU 3.x kann folgendermaßen automatisiert durchgeführt werden:

l. Beim Installationsvorgang durch anhaken der Checkbox **Convert 2.x Files**: Dadurch wird der **Xtract Universal Configuration Converter** aufgerufen, der gewährleistet, dass alle Extraktionen, Quellsysteme, Destinationen, Server- und Benutzersettings in der neuen Version bereitstehen.  
Im erscheinenden Kommandozeilen-Fenster muss der Start des Konvertierungsprozesses bestätigt werden. 

![XU3_Migration_1](/img/content/XU3_Migration_1.jpg){:class="img-responsive"}

![XU3_Migration_2](/img/content/XU3_Migration_2.jpg){:class="img-responsive"}

2. Durch das manuelle Starten des **Xtract Universal Configuration Converters**: Wird der Konverter nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis gestartet werden. 

![XU3_Migration_3](/img/content/XU3_Migration_3.jpg){:class="img-responsive"}

**ACHTUNG:**
In XU 2.x konnten Windows AD Benutzer in XU angelegten custom Benutzergruppen zugeordnet werden. In XU 3.x ist dies nicht mehr möglich.<br>
Das ist ein "Breaking Change" im Vergleich zu XU 2.x.

Daraus folgt, dass Windows AD Benutzer, die unter XU 2.x custom Benutzergruppen zugeordnet waren, diesen Gruppen nach der Migration zu XU 3.x nicht mehr zugeordnet sind. 

Die Zugriffssicherheit wird dadurch nicht beeinträchtigt. Allerdings wird eine Zugriffssicherheit, die für Windows AD Benutzer auf Gruppenebene bestand, jetzt nunmehr auf Benutzerebene aufgelöst.

