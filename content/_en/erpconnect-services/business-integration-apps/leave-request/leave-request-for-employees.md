---
ref: ecs-leave-request-01
layout: page
title: Leave Request for Employees
description: Leave Request for Employees
product: erpconnect-services
parent: leave-request
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=leave-request-for-employees
progressstate: 
---

The Leave Request solution for employees consists of three tabs:

- Leave summary: The employee gets an overview about his time quotas here.
- My absences: The employee can request new absences here and gets an overview about already created leave requests.
- Team Calendar: The employee gets a graphical overview about the absences of his teammates here. 

![bia-leave-1](/img/content/bia-leave-1.png){:class="img-responsive"}

### Create and display Leave Requests

With the Leave Request app employees can create new leave requests and post them – with a notice for the approver or not – to their responsible manager. A new request is created in the *My Absences* tab by clicking the *Create* button. A popup screen for entering all necessary data (e.g. absence type, time frame etc.) appears.  
 
Leave Request popup screen:

![bia-leave-2](/img/content/bia-leave-2.png){:class="img-responsive"}

To determine the correct approver SAP customizing rules are responsible.
In standard all the requests are posted to the line manager of the employee defined in organizational management. If the employee clicks the *Validate* button the line manager is displayed in the Manager box and the request can be submitted.  

Data validation:

![bia-leave-3](/img/content/bia-leave-3.png){:class="img-responsive"}

The selectable absence types are customized in the SAP system. In standard Annual Leave is one common absence type but there are much more absences you could implement e.g. sick leave, educational leave, flextime offset, etc.

If an employee submits a leave request to his manager a workflow is triggered in the SAP system containing different approval states. Technically spoken the leave requests are posted to a SAP database where they can be evaluated at any time per employee or covering the whole staff. In the Leave Request App all requests are listed for the employee in the *My Absences* tab. Requests can be edited or deleted there. If a submitted leave request can be edited or deleted is defined in SAP customizing. In standard only absences in the future can be changed.    

 
My Absences:

![bia-leave-4](/img/content/bia-leave-4.png){:class="img-responsive"}

### Team Calendar

In the *Team Calendar* tab employees get an overview about team members’ absences. The displayed time period can be adapted individually (weekly, monthly or daily view). For both completed and future time periods the customer gets an overview of the team members’ requested and approved absences. With this, employees have an up-to-date overview about absences in the team and can do their absence planning accordingly.   

 
Team Calendar:

![bia-leave-5](/img/content/bia-leave-5.png){:class="img-responsive"}

In addition to the display of absences employees can also use the team calendar to request new absences by double clicking in the calendar view. A popup screen will appear for requesting absences. The selected time period in the calendar is transferred to the input screen (Start Date and End Date).


![bia-leave-6](/img/content/bia-leave-6.png){:class="img-responsive"}



![bia-leave-7](/img/content/bia-leave-7.png){:class="img-responsive"}

### Leave Summary

In the *Leave Summary* tab employees get an overview about their time quotas - these are absences which are connected with a quota. The overview contains both, a list of the customized time quotas and a graphical view of the quotas displayed as a diagram.  

Leave summary:

![bia-leave-8](/img/content/bia-leave-8.png){:class="img-responsive"}

A classic example for an absence type connected with a quota would be annual leave. If an employee requests five days` annual leave and get it approved, then the quota of e.g. thirty days will be reduced to twenty-five days. The employee will get an exact summary then of how many days were already requested, approved and how many remaining days of paid leave are still available for the selected time period.


### Menu bar

In the menu bar several settings can be applied on the solution.  

![bia-leave-9](/img/content/bia-leave-9.png){:class="img-responsive"}

With the magnifier symbol the time interval to which the app functions relate can be adjusted. In standard the current key date is preselected. To see entries in the *My Absences* tab or in the Team Calendar outside this limited timeframe the time interval must be adjusted (e.g. to the current calendar year).  

Time interval selection:

![bia-leave-10](/img/content/bia-leave-10.png){:class="img-responsive"}

With the tabs *Refresh Summary* and *Refresh Calendar* the corresponding tab is called up again with the adjusted time interval. 

Refresh summary:

![bia-leave-11](/img/content/bia-leave-11.png){:class="img-responsive"}

Refresh Calendar:

![bia-leave-12](/img/content/bia-leave-12.png){:class="img-responsive"}

With the *Show Settings* button different technical configurations on the service can be made. 

Show Settings:

![bia-leave-13](/img/content/bia-leave-13.png){:class="img-responsive"}

For both Leave Request and Leave Approval the most important fields are user.Personal number and view.language. In the user.Personal number field the employees SAP personell number must be set. In the *user.Personal Number* Manager field the manager’s SAP *personell number* must be set.  

With the *view.language* field the solution’s display language can be set from German (DE) to English (EN) or the other way around. This setting only refers to the labels in the solution - data that is obtained from the SAP system is displayed in the language the ECS Service Application is configured. 

With the *OK* button the entries are confirmed and with save and reload the entries are saved and the corresponding tab is reloaded. With *Load defaults* the settings are reset to default values. With *Close* the configuration screen is closed. 
 

Configuration screen:

![bia-leave-14](/img/content/bia-leave-14.png){:class="img-responsive"}
