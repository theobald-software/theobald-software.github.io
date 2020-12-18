---
ref: bc-advanced-techniques-11
layout: page
title: Fehlerbehandlung
description: Fehlerbehandlung
product: board-connector
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 8
lang: de_DE
progressstate: 3
---

### Dienst startet nicht 

Wenn der Dienst nicht startet, dann ändern Sie das Benutzerkonto, unter dem der Dienst läuft und stellen Sie sicher, dass das Konto über die folgenden Rechte verfügt: 

- Local Security Policy > Local Policies > User Right Management: einloggen als *service*.
- Dateirechte für das Installationsverzeichnis und die Unterverzeichnisse: Modify.
- HTTP URL Access Control List für http://+:httpPort/. 
Lesen Sie den Artikel [Configuring HTTP and HTTPS](http://msdn.microsoft.com/en-us/library/ms733768.aspx), zum Thema "Anlegen von URLACL".
Statt der URL ACL kann es auch ein Administrator-Account sein.


#### Zuweiseung des Dienstes einem Benutzerkonto

1. Klicken Sie auf **[Start] > Systemsteuerung > Verwaltung**.
2. Doppelklicken Sie auf Dienste.
3. Klicken Sie mit der rechten Maustaste auf den Dienst und wählen Sie "Eigenschaft".
4. Im Tab *Log On*, ändern Sie das Benutzerkonto und klicken Sie auf **[Anwenden]**.