---
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

**ACHTUNG:**
In XU 2.x konnten Windows AD Benutzer in XU angelegten custom Benutzergruppen zugeordnet werden. In XU 3.x ist dies nicht mehr möglich.<br>
Das ist ein "Breaking Change" im Vergleich zu XU 2.x.

Daraus folgt, dass Windows AD Benutzer, die unter XU 2.x custom Benutzergruppen zugeordnet waren, diesen Gruppen nach der Migration zu XU 3.x nicht mehr zugeordnet sind. 

Die Zugriffssicherheit wird dadurch nicht beeinträchtigt. Allerdings wird eine Zugriffssicherheit, die für Windows AD Benutzer auf Gruppenebene bestand, jetzt nunmehr auf Benutzerebene aufgelöst. 