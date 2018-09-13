---
layout: page
title: Leave Approval for Managers
description: Leave Approval for Managers
product: erpconnect-services
parent: leave-request
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=leave-approval-for-managers
---

The manager app for leave approval consists of two tabs:

- My Absences: This is the manager’s workitem list for all the requests sent by employees. Requests can be simply approved or rejected here.   
- Team Calendar: The manager gets an overview about the absences in the team.

UI Leave Approval app:

![bia-manage-01](/img/content/bia-manage-01.png){:class="img-responsive"}

**Approve or reject requests**

An employee’s leave request not yet approved or rejected is in status Sent. In this status the manager gets the request listed in his personal worklist. By calling up the application and by clicking the refresh button all new requests are loaded into the list.  


Approval scenario:

![bia-manage-02](/img/content/bia-manage-02.png){:class="img-responsive"}

The manager can directly approve a request by clicking the button *Approve* on the right side of the screen. Automatically a background job in SAP is triggered that posts the approved leave requests to personal administration. With this the request gets the status Approved and is completed.    
With the *Reject* button the manager can dismiss leave requests instantly and can optionally send a notice with the rejection reason to the submitter. In SAP customizing it can be defined that sending a notice is mandatory for rejection of leave requests.  

 

**Team calendar** 

There is also a *Team Calendar* tab in the manager’s app for leave request approval. It is similar to the team calendar in the employee’s app. Only the function to post request within the team calendar is not available in the approval application. If a manager is also required to request absences at the next higher-level superior, he\she can also use the employee’s app for leave requests. 


Team Calendar manager:

![bia-manage-03](/img/content/bia-manage-03.png){:class="img-responsive"}
