---
ref: xu-scheduler-01
layout: page
title: Aufruf via Scheduler
description: Ausführung einer Extraktion mit einem Scheduler
product: xtract-universal
parent: extraktionen-ausfuehren-und-einplanen
permalink: /:collection/:path
weight: 9
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).


Der folgende Abschnitt zeigt die Verwendung des Konsolenprogramms *xu.exe* zum Einplanen von Extraktionen über Scheduler diverser Drittanbieter. 

Exemplarisch wird die Einrichtung für den Windows Task Scheduler und den SQL Server Agent nachfolgend beschrieben.

### Aufruf via Windows Task Scheduler

1. Öffnen Sie den Windows Task Scheduler über *Taskschd.msc* von der Kommandozeile.
![Open Scheduler](/img/content/xu/automation/open_scheduler.png){:class="img-responsive"}
2. Erstellen Sie einen neuen Tasks über *Actions > Create Task ...* (1).
![Create Task](/img/content/xu/automation/create_task.png){:class="img-responsive"}
3. Geben Sie einen Namen für den Task (2) und eine optionale Beschreibung.
![Create Task General](/img/content/xu/automation/create_task_general.png){:class="img-responsive"}
4. Geben Sie im Tab *Triggers* über **[New...]** eine Zeitoption ein.
5. Legen Sie Startdatum und -zeit fest und bestätigen Sie die Eigabe über **[OK]** (3).
![Create Task Trigger](/img/content/xu/automation/create_task_trigger.png){:class="img-responsive"}
6. Geben Sie im Tab *Actions* das Startprogramm unter *Program / script* an. Parameter der Extraktion fügen Sie in *Add arguments (optional)* hinzu, z.B. `"C:\Program Files\XtractUniversal\xu.exe" -s todd.theobald.local -p 8065 -n SAPPlants` (4).
![Create Task Actions](/img/content/xu/automation/create_task_actions.png){:class="img-responsive"}
7. Bestätigen Sie die Eingabe über **[OK]** (5).
8. Überprüfen Sie die Zusammenfassung und klicken Sie auf Fertigstellen.
![xu-wts-command](/img/content/xu/automation/task_run.jpg){:class="img-responsive"}

{: .box-note }
**Hinweis:** Die Extraktion ist jetzt eingeplant und kann über Rechtsklick + *Run* sofort ausgeführt werden. 

{: .box-tip }
**Tipp:** Einem Task können mehrere Extraktionen zugeordnet werden. Bearbeiten Sie den Task und gehen Sie zum Tab *Actions*. Erstellen Sie neue Aktionen wie oben beschrieben .


### Aufruf via SQL Server Agent

{: .box-note }
**Hinweis:** Notwendige Berechtigungen zur Erstellung und Ausführung eines Jobs mit dem SQL-Server-Agent müssen vorhanden sein.   

1. Öffnen Sie das SQL-Server-Management-Studio (SSMS), um sich mit einem SQL-Server zu verbinden.
2. Erstellen Sie einen neuen Jobs über **SQL Server Agent > New > Job...**. 
![Create Job](/img/content/xu/automation/create_job.png){:class="img-responsive"}
3. Klicken Sie im Job-Dialogfeld auf **Select a page > Steps > [New]**.
![Create Step](/img/content/xu/automation/create_step.png){:class="img-responsive"}
4. Geben Sie **Step name**, **Type**, **Run as** (1) und **Command** (2) ein, <br> z.B. *xu*, *Operating system (CmdExec)*, *SQL-Server-Agent Service Account*, `"C:\Programmdateien\XtractUniversal\xu.exe" -s localhost -p 8065 -n customers`.
![Create StepII](/img/content/xu/automation/xu_sql_server_agent_job_step.png){:class="img-responsive"}
5. Klicken Sie auf die Seite **Select a page > Advanced**, um weitere Optionen festzulegen, z.B.
	- **On success action**, **On failure action**
	- **Retry attemps**, **Retry interval**
	- **Output file**
6. Bestätigen Sie die Eingabe über **[OK]**.
7. Unter **SQL Server Agent > Jobs** finden Sie nun den definierten Job. 
8. Klicken Sie mit der rechten Maustaste auf den Job und wählen Sie **Start Job at Step...**, um den Job auszuführen. 
9. Die erfolgreiche Ausführung des erstellten SQL Server Agent Jobs wird in SSMS angezeigt.
![xu-ssa-start](/img/content/xu/automation/xu_sql_server_agent_job_start.png){:class="img-responsive"}

****
#### Weiterführende Links
- [SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/sql-server-agent?view=sql-server-ver15)
- [Start Task Scheduler](http://technet.microsoft.com/en-us/library/cc721931.aspx)