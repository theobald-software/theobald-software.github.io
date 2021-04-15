---
ref: xu-scheduler-01
layout: page
title: Aufruf via Scheduler
description: Ausführung einer Extraktion mit einem Scheduler
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 9
lang: de_DE
---
Der folgende Abschnitt zeigt die Verwendung des Konsolenprogramms *xu.exe* zum Einplanen von Extraktionen über Scheduler diverser Drittanbieter. 

Examplarisch werden die Einrichtung für den Windows Task Scheduler als auch für den SQL Server Agent nachfolgend beschrieben.

### Aufruf via Windows Task Scheduler

1. Öffnen Sie den Windows Task Scheduler mittels *Taskschd.msc* von der Kommandozeile.
![Open Scheduler](/img/content/xu/automation/open_scheduler.png){:class="img-responsive"}
2. Erstellen eines neuen Tasks über **Actions > Create Task ...** (1).
![Create Task](/img/content/xu/automation/create_task.png){:class="img-responsive"}
3. Angabe eines Namens für den Task (2) und eine optionale Beschreibung über **Create Task > General**.
![Create Task General](/img/content/xu/automation/create_task_general.png){:class="img-responsive"}
4. Angabe einer Zeitoption über **Triggers > New... > Settings**.
5. Legen Sie Startdatum und -zeit fest und bestätigen Sie die Eigabe mittels **[OK]** (3).
![Create Task Trigger](/img/content/xu/automation/create_task_trigger.png){:class="img-responsive"}
6. Angabe des Startprogramms **Program / script** sowie Parameter der Extraktion **Add arguments (optional)**, z.B. `"C:\Program Files\XtractUniversal\xu.exe" -s todd.theobald.local -p 8065 -n SAPPlants` (4).
![Create Task Actions](/img/content/xu/automation/create_task_actions.png){:class="img-responsive"}
7. Beatätigen Sie die Eingabe mittels **[OK]** (5).
8. Überprüfen Sie die Zusammenfassung und klicken Sie auf Fertigstellen.
![xu-wts-command](/img/content/xu/automation/task_run.jpg){:class="img-responsive"}

{: .box-note }
**Hinweis:** Die Extraktion ist jetzt eingeplant und kann auch mittels Rechtsklick **[Run]** sofort ausgeführt werden. 

{: .box-tip }
**Tip:** Es können einem Task mehrere Extraktionen zugeordnet werden. Klicken Sie auf Bearbeiten und gehen Sie zur Registerkarte Aktionen und erstellen Sie neue Aktionen wie oben beschrieben.


### Aufruf via SQL Server Agent

{: .box-note }
**Hinweis:** Notwendige Berechtigungen zur Erstellung und Ausführung eines Jobs mit dem SQL-Server-Agent müssen vorhanden sein.   

1. Öffnen Sie das SQL-Server-Management-Studio (SSMS), um sich mit einem SQL-Server zu verbinden.
2. Erstellung eines neuen Jobs über **SQL Server Agent > New > Job...**. 
![Create Job](/img/content/xu/automation/create_job.png){:class="img-responsive"}
3. Klicken Sie im Job-Dialogfeld auf **Select a page > Steps > [New]**.
![Create Step](/img/content/xu/automation/create_step.png){:class="img-responsive"}
4. Angabe **Step name**, **Type**, **Run as** (1) sowie **Command** (2), <br> z.B. *xu*, *Operating system (CmdExec)*, *SQL-Server-Agent Service Account*, `"C:\Programmdateien\XtractUniversal\xu.exe" -s localhost -p 8065 -n customers`.
![Create StepII](/img/content/xu/automation/xu_sql_server_agent_job_step.png){:class="img-responsive"}
5. Klicken Sie auf die Seite **Select a page > Advanced**, um weitere Optionen festzulegen, z.B.
	- **On success action**, **On failure action**
	- **Retry attemps**, **Retry interval**
	- **Output file**
6. Bestätigen Sie die Eingabe mittels **[OK]**.
7. Unter **SQL Server Agent > Jobs** sollten Sie nun den definierten Job finden. 
8. Klicken Sie mit der rechten Maustaste auf den Job und wählen Sie **Start Job at Step...**, um den Job auszuführen. 
9. Die erfolgreiche Ausführung erstellten SQL Server Agent Jobs wird im nachfolgenden Fenster in SSMS angezeigt.
![xu-ssa-start](/img/content/xu/automation/xu_sql_server_agent_job_start.png){:class="img-responsive"}

****
#### Weiterführende Links
- [SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/sql-server-agent?view=sql-server-ver15)
- [Start Task Scheduler](http://technet.microsoft.com/en-us/library/cc721931.aspx)