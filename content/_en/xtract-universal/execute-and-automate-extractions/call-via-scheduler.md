---
ref: xu-scheduler-01
layout: page
title: Call via Scheduler
description: Call an Extraction via Scheduler
product: xtract-universal
parent: execute-and-automate-extractions
permalink: /:collection/:path
weight: 9
lang: en_EN
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

This section shows how to use the console program *xu.exe* to schedule extractions with third party scheduling tools.
Windows Task Scheduler and the SQL Server Agent are used as examples for setting up extraction schedules.

### Call via Windows Task Scheduler

1. Open the Windows Task Scheduler by typing *Taskschd.msc* into the command line.
![Open Scheduler](/img/content/xu/automation/open_scheduler.png){:class="img-responsive"}
2. Create a new task by clicking **Actions > Create Task ...** (1).
![Create Task](/img/content/xu/automation/create_task.png){:class="img-responsive"}
3. Enter a name for the task (2) and an optional description.
![Create Task General](/img/content/xu/automation/create_task_general.png){:class="img-responsive"}
4. In the tab *Triggers* click **[New...]** to add a time option.
5. Set a start date and time and confirm the entry with **[OK]** (3).
![Create Task Trigger](/img/content/xu/automation/create_task_trigger.png){:class="img-responsive"}
6. State the start program in *Program / script* in the tab *Actions*. Add the parameters of the extraction in *Add arguments (optional)* e.g., `"C:\Program Files\XtractUniversal\xu.exe" -s todd.theobald.local -p 8065 -n SAPPlants` (4).
![Create Task Actions](/img/content/xu/automation/create_task_actions.png){:class="img-responsive"}
7. Click **[OK]** (5) to confirm the input.
8. Check the summary and finish the setup.
![xu-wts-command](/img/content/xu/automation/task_run.jpg){:class="img-responsive"}

{: .box-note }
**Note:** The extraction is now scheduled and can be run by right-clicking the task and selecting the *Run* option. 

{: .box-tip }
**Tip:** Multiple extractions can be assigned to a single task. Edit the task and switch to the *Actions* tab. Create a new action as described above.


### Call via SQL Server Agent

{: .box-note }
**Note:** You must have all necessary authorization for creating and executing jobs with the SQL Server Agent.   

1. Open the SQL-Server-Management-Studio (SSMS) to connect to an SQL-Server.
2. Create a new job via **SQL Server Agent > New > Job...**. 
![Create Job](/img/content/xu/automation/create_job.png){:class="img-responsive"}
3. Navigate to *Select a page > Steps* and click **[New]**.
![Create Step](/img/content/xu/automation/create_step.png){:class="img-responsive"}
4. Enter a **Step name**, **Type**, **Run as** (1) and **Command** (2), <br> e.g., *xu*, *Operating system (CmdExec)*, *SQL-Server-Agent Service Account*, `"C:\Programmdateien\XtractUniversal\xu.exe" -s localhost -p 8065 -n customers`.
![Create StepII](/img/content/xu/automation/xu_sql_server_agent_job_step.png){:class="img-responsive"}
5. Click *Select a page > Advanced* to set further options e.g.,
	- **On success action**, **On failure action**
	- **Retry attemps**, **Retry interval**
	- **Output file**
6. Click **[OK]** to confirm your input.
7. Find the new job in **SQL Server Agent > Jobs**. 
8. Right-click the job and select **Start Job at Step...** to execute the job. 
9. The successful execution of the SQL Server Agent job is displayed in SSMS.
![xu-ssa-start](/img/content/xu/automation/xu_sql_server_agent_job_start.png){:class="img-responsive"}

****
#### Related Links
- [SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/sql-server-agent?view=sql-server-ver15)
- [Start Task Scheduler](http://technet.microsoft.com/en-us/library/cc721931.aspx)