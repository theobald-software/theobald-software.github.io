---
ref: ecs-business-integration-apps-05
layout: page
title: CATS
description: CATS
product: erpconnect-services
parent: business-integration-apps
childidentifier: cats
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=cats
---

The Cross Application Timesheet (**CATS**) is a multi-module SAP tool for the recording of working hours and activities. With CATS companies are able to process quick and efficient invoicing on basis of their employee’s working time data. 
Theobald software developed a self-service application that allows users to record working times and attendances on projects within the SAP Project System module (SAP PS).


**App structure**

The app consists of a simple monthly, weekly or daily calendar view in which you can scroll forwards and backwards to make new entries. 
With the Secure Store Application a secure connection and authentication of the SharePoint user to the SAP user is realized. The connection from the SAP user to the SAP personal number is set in HR infotype IT0105. 

**Create a new time sheet entry**

By clicking into the calendar a new window pops up for making a new entry. The prior selected time span in the calendar is automatically transferred to the Start- and Enddtime in the input screen.  


![cats-app-01](/img/content/cats-app-01.png){:class="img-responsive"}

![cats-app-02](/img/content/cats-app-02.png){:class="img-responsive"}
 

In the first row you can select the project you want to record working times for (short text and project definition in the selection screen). Only released projects can be used for time recording. In the dropdown list all released projects from the SAP project system are available. 

![cats-app-03](/img/content/cats-app-03.png){:class="img-responsive"}



After selecting the wanted project, the corresponding activities are loaded and listed in the second row of the screen.

![cats-app-04](/img/content/cats-app-04.png){:class="img-responsive"}


The network description, network number and short text of the activity is displayed in this row. For one project sometimes more than one activity can be used for recording working times. To save the entries you have to enter a description. 

After successfully saving the working times a new entry is created in the calendar. 


![cats-app-06](/img/content/cats-app-06.png){:class="img-responsive"}

![cats-app-07](/img/content/cats-app-07.png){:class="img-responsive"}
 
Existing entries can be easily deleted. 

**Posting data to the SAP system**

After saving a new time entry the data is posted to the SAP system. In the corresponding tables (e.g. CATSDB und CATSPS) and databases of the CATS component new entries are created and can be viewed in SAP (Transaction CAT3).   

 
![cats-app-08](/img/content/cats-app-08.png){:class="img-responsive"}

Depending on the customizing settings of your system you may transfer the time entries to the SAP project system (transaction CAT5). 

![cats-app-09](/img/content/cats-app-09.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
