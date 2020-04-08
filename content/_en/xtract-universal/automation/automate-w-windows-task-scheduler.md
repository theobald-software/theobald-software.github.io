---
ref: xu-automation-03
layout: page
title: Automating Extractions with Windows Task Scheduler
description: Windows Task Scheduler
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 3
lang: en_EN
---

In this chapter I will show how to schedule an Xtract Universal extraction using Windows Task Scheduler.
It is as easy as calling the command line with the right parameters.

1. open  Task Scheduler on Windows, e.g. by searching for Task Scheduler.
Alternatively you can Run the Task Scheduler from the Command Line by Typing Taskschd.msc.

2. Click the Action menu and then click Create Basic Task

3. Type a name for the task and an optional description, and then click Next.

4. Select the option daily and then click Next.

5. Set start date and time and then click Next.

6. Select the option Start a program

7. As Program/script set the path to the Xtract Universal Command tool:
"C:\Program Files\XtractUniversal\xu.exe".

Set the field Add arguments (optional) to: -s localhost -p 8065 -n SAPPlants

Click Next.

8. Check the Summary and Click Finish.

Now the Task is planned. You can right-click the task and select run to run it immediately.

If you want the task to run more than one extraction, open edit and go to the tab Actions and create new actions as described in step 7.

This was just a demonstration. The Task Scheduler offers more options. For more options check Microsoft technet.


