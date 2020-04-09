---
ref: xu-automation-04
layout: page
title: Extraktion mit SQL Server Agent Automatisieren
description: SQL Server Agent
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 4
lang: de_DE
---


In diesem Kapitel zeigen wir, wie Sie eine Extraktion mit dem SQL Server Agent einplanen.

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

