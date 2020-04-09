---
ref: xu-automation-03
layout: page
title: Extraktion mit Windows Task Scheduler Automatisieren
description: Windows Task Scheduler
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 3
lang: de_DE
---


In diesem Kapitel werde ich zeigen, wie man eine Xtract Universal Extraktion mit dem Windows Task Scheduler einplanen kann.
Es ist so einfach wie der Aufruf des Kommandozeilenprogrammes mit den richtigen Parametern.

1. Öffnen Sie den Taskplaner unter Windows, z.B. indem Sie nach Taskplaner suchen.
Alternativ können Sie den Taskplaner von der Kommandozeile aus starten, indem Sie Taskschd.msc eingeben.

2. Klicken Sie auf das Menü Action und dann auf Create Basic Task

3. Geben Sie einen Namen für die Aufgabe und eine optionale Beschreibung ein, und klicken Sie dann auf Weiter.

4. Wählen Sie die Option Täglich und klicken Sie dann auf Weiter.

5. Legen Sie Startdatum und -zeit fest und klicken Sie dann auf Weiter.

6. Wählen Sie die Option Ein Programm starten

7. Legen Sie als Programm/Skript den Pfad zum Xtract Universal Command Tool fest: 

```
"C:\Programmdateien\XtractUniversal\xu.exe"
```
Setzen Sie das Feld Add arguments (optional) auf:
```
-s localhost -p 8065 -n SAPPlants
```

Klicken Sie auf Weiter.

![xu-wts-command](/img/content/xu/automation/xu-command-task-scheduler.png){:class="img-responsive"}

8. Überprüfen Sie die Zusammenfassung und klicken Sie auf Fertigstellen.

Jetzt wird der Task geplant. Sie können mit der rechten Maustaste auf den Task klicken und Ausführen wählen, um sie sofort auszuführen.

![xu-wts-command](/img/content/xu/automation/task_run.jpg){:class="img-responsive"}


Wenn Sie möchten, dass der Task mehr als eine Extraktion ausführt, klicken Sie auf Bearbeiten und gehen Sie zur Registerkarte Aktionen und erstellen Sie neue Aktionen wie in Schritt 7 beschrieben.

Der Task Scheduler bietet mehr Optionen. Weitere Optionen finden Sie unter Microsoft technet.
http://technet.microsoft.com/en-us/library/cc721931.aspx




