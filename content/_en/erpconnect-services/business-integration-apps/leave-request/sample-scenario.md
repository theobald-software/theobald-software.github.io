---
layout: page
title: Sample Scenario
description: Sample Scenario
product: erpconnect-services
parent: leave-request
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=sample-scenario
---

As an application example a leave request should be submitted to and approved by the manager. After that it should be checked in the SAP system whether the data was posted successfully.  

First open the Leave Request solution for employees and adjust the time interval in the menu bar to the current calendar year:

![bia-manage-04](/img/content/bia-manage-04.png){:class="img-responsive"}
 
Next, check the configuration settings. Enter a functioning personal number in field user.PersonalNumber. 
For this personal number absence quotas have to be generated and the person has to be integrated in the organizational management. 


![bia-manage-05](/img/content/bia-manage-05.png){:class="img-responsive"}


Then enter a new leave request in the *My Absences* or the Team Calendar tab. It’s best if you select annual leave as absence type because then it is possible to check the quota deduction in the Leave *Summary* tab. 

Validate the data before submitting it. Annual leave can usually only be requested for future periods.  


![bia-leave-manage-06](/img/content/bia-leave-manage-06.png){:class="img-responsive"}


Check if the request is listed in the *My Absences* tab. It should be listed there in status Sent. 

 
![bia-leave-manage-07](/img/content/bia-leave-manage-07.png){:class="img-responsive"}


Before you switch to the *Leave Approval* scenario open the Leave Summary tab and check the quota status. In the example there are three unapproved leave requests.

 
![bia-leave-manage-08](/img/content/bia-leave-manage-08.png){:class="img-responsive"}


Then switch to the Leave Approval solution and check in the configuration settings first whether a personal number for the manager is stored. 

![bia-leave-manage-09](/img/content/bia-leave-manage-09.png){:class="img-responsive"}
 


Again adjust the time interval in the menu bar to the current calendar year to see all entries. After that switch to the *My Absences* tab. 

![bia-leave-manage-10](/img/content/bia-leave-manage-10.png){:class="img-responsive"} 

The just created request is now displayed in the manager’s workitem list and can be approved. Approve the request. 

![bia-leave-manage-11](/img/content/bia-leave-manage-11.png){:class="img-responsive"} 

The request disappears from the work list. 


![bia-leave-manage-12](/img/content/bia-leave-manage-12.png){:class="img-responsive"} 

Then switch back to the employees` scenario and refresh the *My Absences* page. The leave request should be displayed there in status Approved now. 


![bia-leave-manage-13](/img/content/bia-leave-manage-13.png){:class="img-responsive"}


First you can check if the leave request was successfully posted to SAP by opening the Leave Summary tab. There should be only two days of unapproved absences left. This means that the absences have been successfully posted to the corresponding SAP infotype because only then quota deduction takes place. 

 
![bia-leave-manage-14](/img/content/bia-leave-manage-14.png){:class="img-responsive"}


In addition the sucessful posting can be checked in the SAP system. Open the SAP starting page and open the personal administration by entering transaction PA20. 

 
![bia-leave-manage-15](/img/content/bia-leave-manage-15.png){:class="img-responsive"}


Enter the employees personal number and confirm the entry with return. 


![bia-leave-manage-16](/img/content/bia-leave-manage-16.png){:class="img-responsive"}


Switch to infotype 2001 for absences by typing in 2001 in the Infotype field. Before opening the overview page of the infotype with the sun-and-mountain symbol set the time period on the right side to the current calendar year. 

 
![bia-leave-manage-17](/img/content/bia-leave-manage-17.png){:class="img-responsive"}


You see, that a record has been created for the selected date.


![bia-leave-manage-18](/img/content/bia-leave-manage-18.png){:class="img-responsive"}


Then switch to infotype 2006 the same way you did with infotype 2001 and open the record for the current calendar year. 

![bia-leave-manage-19](/img/content/bia-leave-manage-19.png){:class="img-responsive"}
 

As you see there are eight days that have been deduced from a thirty days` quota. These are the approved leave requests for the selected time period.  


![bia-leave-manage-20](/img/content/bia-leave-manage-20.png){:class="img-responsive"} 


This is consistent with the Leave Summary in the employee’s app. 

![bia-leave-manage-21](/img/content/bia-leave-manage-21.png){:class="img-responsive"}


With this you have successfully checked that the data was posted from the SharePoint App to the SAP system.