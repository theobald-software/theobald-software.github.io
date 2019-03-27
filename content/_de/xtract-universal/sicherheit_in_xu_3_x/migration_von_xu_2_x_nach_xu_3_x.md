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

Beim Installationsvorgang durch Anhaken der Checkbox *Convert 2.x Files*. <br>
Dadurch wird der *Xtract Universal Configuration Converter* aufgerufen, der gewährleistet, dass alle Extraktionen, Quellsysteme, Destinationen, Server- und Benutzersettings aus XU 2.x in der neuen Version bereitstehen. <br>

![XU3_Migration_1](/img/content/XU3_Migration_1.png){:class="img-responsive"} <br>

Im erscheinenden Kommandozeilen-Fenster muss der Start des Konvertierungsprozesses bestätigt werden. <br>

![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"} <br>

Wird der Konverter nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis gestartet werden. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

**ACHTUNG:** <br>
In XU 2.x konnten Windows AD Benutzer in XU angelegten custom Benutzergruppen zugeordnet werden. In XU 3.x ist dies nicht mehr möglich.<br>
Das ist ein "Breaking Change" im Vergleich zu XU 2.x.

Daraus folgt, dass Windows AD Benutzer, die unter XU 2.x custom Benutzergruppen zugeordnet waren, diesen Gruppen nach der Migration zu XU 3.x nicht mehr zugeordnet sind. 

Die Zugriffssicherheit wird dadurch nicht beeinträchtigt. Allerdings wird eine Zugriffssicherheit, die für Windows AD Benutzer auf Gruppenebene bestand, jetzt nunmehr auf Benutzerebene aufgelöst.

