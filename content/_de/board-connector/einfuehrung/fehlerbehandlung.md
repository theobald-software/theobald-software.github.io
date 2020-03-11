---
ref: bc-introduction-07
layout: page
title: Fehlerbehandlung
description: Fehlerbehandlung
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 7
lang: de_DE
---

**Dienst startet nicht**

Wenn der Dienst nicht startet, dann ändern Sie das Benutzerkonto, unter dem der Dienst läuft und stellen Sie sicher, dass es folgende Rechte hat: 

- Local Security Policy -> Local Policies -> User Right Management: Log on-as-a-service
- Dateirechte für das Installationsverzeichnis + Unterverzeichnisse: Modify
- HTTP URL Access Control List für http://+:httpPort/. 
Auf folgender Seite finden Sie, wie man eine URLACL anlegt: [http://msdn.microsoft.com/en-us/library/ms733768.aspx](http://msdn.microsoft.com/en-us/library/ms733768.aspx)<br>
Statt der URL ACL kann es auch ein Administrator-Account sein.

Um dem Dienst ein Benutzerkonto zuzuweisen, gehen Sie wie folgt vor:

1. Klicken Sie auf Start -> Systemsteuerung -> Verwaltung.
2. Doppelklicken Sie auf Dienste.
3. Klicken Sie mit der rechten Maustaste auf den Dienst und wählen Sie Eigenschaft.
4. Im Tab Log On, ändern Sie das Benutzerkonto und klicken Sie auf Anwenden.