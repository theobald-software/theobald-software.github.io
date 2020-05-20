---
ref: xu-etl-01
layout: page
title: Extraktion mit Windows Task Scheduler Automatisieren
description: Windows Task Scheduler
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 11
lang: de_DE
---

### Aufruf via Windows Task Scheduler

In diesem Abschnitt werde ich zeigen, wie man eine Xtract Universal Extraktion mit dem Windows Task Scheduler einplanen kann.
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



### Aufruf via SQL Server Agent

In diesem Abschnitt zeigen wir, wie Sie eine Extraktion mit dem SQL Server Agent einplanen.

Wir setzen voraus, dass Sie alle notwendigen Berechtigung zur Erstellung und Aufsführung eines Jobs mit dem SQL Server Agent besitzen und einen solchen Job unabhängig von Xtract Universal auch anlegen und ausführen können.  

- Öffnen Sie das SQL Server Management Studio 
- Stellen Sie im Objekt-Explorer eine Verbindung zu einer Instanz des SQL Server-Datenbankmoduls her, und erweitern Sie dann diese Instanz.
- Erweitern Sie den SQL Server Agent, erstellen Sie einen neuen Job 
- Klicken Sie im Dialogfeld Job properties auf die Seite Schritte und dann auf Neu.
- Geben Sie im Dialogfeld Neuer Job-Step einen Job-Step-Namen ein.
- Wählen Sie in der Liste Typ die Option CmdExec.
- Wählen Sie in der Liste Ausführen als das Proxy-Konto mit den Anmeldedaten, das der Auftrag verwenden wird. Standardmäßig werden CmdExec-Job-Steps unter dem Kontext des SQL Server Agent-Dienstkontos ausgeführt.
- Geben Sie im Feld Command den folgenden Befehl ein. 

```
"C:\Programmdateien\XtractUniversal\xu.exe" -s localhost -p 8065 -n Kunden
```
![xu-ssa-command](/img/content/xu/automation/xu_sql_server_agent_job_step.png){:class="img-responsive"}


- Klicken Sie auf die Seite Erweitert, um Jobschrittoptionen festzulegen, z. B.: welche Aktion bei Erfolg oder Fehlschlag des Jobschritts ausgeführt werden soll, wie oft der SQL Server Agent versuchen soll, den Jobschritt auszuführen, und die Datei, in die der SQL Server Agent die Ausgabe des Jobschritts schreiben kann. 

- Klicken Sie auf Ok.
- Unter SQL Server Agent -> Jobs sollten Sie nun den definierten Job finden. 
- Klicken Sie mit der rechten Maustaste auf den Job und wählen Sie Run Job at Step ..., um den Job auszuführen. 

![xu-ssa-start](/img/content/xu/automation/xu_sql_server_agent_job_start.png){:class="img-responsive"}