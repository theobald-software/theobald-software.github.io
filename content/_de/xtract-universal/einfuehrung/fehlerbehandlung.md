---
ref: xu-introduction-08
layout: page
title: Fehlerbehandlung
description: Fehlerbehandlung
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=fehlerbehandlung
---

**Dienst startet nicht**

Wenn der Dienst nicht startet, dann ändern Sie das Benutzerkonto, unter dem der Dienst läuft und stellen Sie sicher, dass es folgende Rechte hat: 

- Local Security Policy -> Local Policies -> User Right Management: *Log on as a service*
- Dateirechte für das Installationsverzeichnis und Unterverzeichnisse: *Modify*
- HTTP URL Access Control List für http://+:httpPort/. 

Auf folgender Seite finden Sie, wie man eine [URLACL](https://docs.microsoft.com/en-us/windows/desktop/Http/add-urlacl) anlegt.
Statt der URL ACL kann es auch ein Administrator-Account sein.

Um dem Dienst ein Benutzerkonto zuzuweisen, gehen Sie wie folgt vor:

1. Klicken Sie auf Start -> Systemsteuerung -> Verwaltung
2. Doppelklicken Sie auf Dienste
![XU-Setup](/img/content/windows-dienste.png){:class="img-responsive"}
3. Klicken Sie mit der rechten Maustaste auf den Dienst und wählen Sie Eigenschaft.
![XU-Setup](/img/content/xtract_dienst allgemein.png){:class="img-responsive"}
4. Im Tab Log On, ändern Sie das Benutzerkonto und klicken Sie auf Anwenden.
![XU-Setup](/img/content/xtract_dienst_anmelden.png){:class="img-responsive"}

