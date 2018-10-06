---
layout: page
title: Travel Request
description: Travel Request
product: erpconnect-services
parent: configuring-the-solution
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=travel_request
---

The **Travel Request** workflow is structured as follows:

1. **Initial request by the employee:** The employee enters the request details into Nintex Forms. It supplies the manager with information such as the date, travel destination, purpose of the trip and so on. After saving the entries the workflow starts automatically. 
2. **Workflow performs approval process:** In several stages an approval process is accomplished. Costs for flights, hotel and other costs are collected, calculated and submitted to the responsible manager. Only after sucessful approval by the manager the travel request is posted to the SAP system and a trip number is generated.  

The worfklow stages are described in more detail on the next few pages. 

**Submitted** 

In workflow stage Submitted  the Status field in the SharePoint list is updated to Submitted  and a notification is sent to the workflow initiator. Then, the workflow switches to the next stage.  

![ECS-Nintex-TravelScenarios25](/img/content/ECS-Nintex-TravelScenarios25.png){:class="img-responsive"}

In the *Send notification* workflow action the workflow initiator is set as reciever. In ordner to get e-mail notifications working, a SMTP server has to be installed and conifgured on your system. Furthermore in the Nintex Workflow settings e-mail delivery has to be configured. The notification subject and text can be configured individually. In our template *Travel Destination* was integrated by a reference field.   

![ECS-Nintex-TravelScenarios26](/img/content/ECS-Nintex-TravelScenarios26.png){:class="img-responsive"}

**Recalculating**

In the next workflow stage *Recalculating* estimated costs for flights, hotels and other costs entered by the customer are collected, calculated and converted into US-dollar using the *Convert into USD* action. The total amount is stored in workflow variable *TotalUSD* and SharePoint list field *TotalUSD* is updated. Then, the workflow switches to the next stage.

![ECS-Nintex-TravelScenarios27](/img/content/ECS-Nintex-TravelScenarios27.png){:class="img-responsive"}

If you can't publish the workflow after importing the workflow file it might be necessary to save the User Defined Action *Get Detail Rows* a new. In this case open the configuration screen of this action and click Save. Eventually also the source field has to be mapped again (for example assign *FlightCosts* to the *Flights* field). 

After processing *Get Details Rows* action workflow actions For Each Amount and *Get its Currency* are used to collect the amount and currency of the entered estimated costs. The output is stored in workflow variables.

![ECS-Nintex-TravelScenarios28](/img/content/ECS-Nintex-TravelScenarios28.png){:class="img-responsive"}

*Convert to USD* action is used to convert the entered estimated travel costs to US-dollar. Therefore workflow variables for amount (*ThisAmt*) and currency (*ThisCurr*) are required as input variables. The converted amount is stored in variable *ThisAmtUSD*. 

![ECS-Nintex-TravelScenarios34](/img/content/ECS-Nintex-TravelScenarios34.png){:class="img-responsive"}

The total amount is calculated then by workflow action *Add to TotalUSD*.

![ECS-Nintex-TravelScenarios35](/img/content/ECS-Nintex-TravelScenarios35.png){:class="img-responsive"}

Once all estimated costs are calculated SharePoint list field *Total USD* is updated and the workflow switches to the next stage. 


**Manager Approval** 

In the next workflow stage *Manager Approval* the travel request is submitted to the manager in charge and the *Status* field in the SharePoint list is updated to *Under Review*. 
When approved, the workflow proceedes with stage *Approved*, in case of a rejection it proceedes with stage *Submitter Revisions*.  


![ECS-Nintex-TravelScenarios36](/img/content/ECS-Nintex-TravelScenarios36.png){:class="img-responsive"}

You can configure the *Review Request* workflow action according to your indivdual requirements. In standard the request is submitted to the manager who is assigned to the employee in the Active Directory.  In the notification text some information from the request was integrated by use of reference fields.    

![ECS-Nintex-TravelScenarios37](/img/content/ECS-Nintex-TravelScenarios37.png){:class="img-responsive"}

**Submitter Revisions**


When a travel request was rejected the workflow proceedes with stage *Submitter Revisions*. In this stage the workflow initiator gets the chance to revise his\her request, for example in case the estimated costs where unacceptable to the manager.  

![ECS-Nintex-TravelScenarios38](/img/content/ECS-Nintex-TravelScenarios38.png){:class="img-responsive"}

You can individually configure workflow action *Offer Chance to Revise*. In standard the workflow task will be submitted to the initiator. The initiator can withdraw his request, this will finish the workflow immediatly. Or he/she can change the request and resubmit it. In this case the workflow will switch back to stage *Recalculating*. 


![ECS-Nintex-TravelScenarios39](/img/content/ECS-Nintex-TravelScenarios39.png){:class="img-responsive"}

**Withdrawn**

If the workflow initiator withdraws the request SharePoint list field *Status* will be updated to *Withdrawn* and the workflow is finished. 

![ECS-Nintex-TravelScenarios50](/img/content/ECS-Nintex-TravelScenarios50.png){:class="img-responsive"}

**Approved**

In workflow stage *Approved*  the workflow ends up after the sucessful approval of the manager. The *Status* field will be updated to *Approved* and the initiator gets a notification.

![ECS-Nintex-TravelScenarios40](/img/content/ECS-Nintex-TravelScenarios40.png){:class="img-responsive"}

You can individually configure the *Send notification* workflow action.

![ECS-Nintex-TravelScenarios41](/img/content/ECS-Nintex-TravelScenarios41.png){:class="img-responsive"}

After that Action Set *Get Personell Number* is processed. With this set of workflow actions the SAP personell number is determined by an LDAP query action which searches the Active Directory.  The SAP personell number is required by the function modules and it's not feasible to let employees enter this number. However if you don't want to store the SAP personell number in your Active Directory this would be a possible alternative.  

![ECS-Nintex-TravelScenarios42](/img/content/ECS-Nintex-TravelScenarios42.png){:class="img-responsive"}

The personell number is stored in field *Office* (physicalDeliveryOfficename) located in the Active Directory user administration. It would also be possible to use a custom field for this information. 

![ECS-Nintex-TravelScenarios43](/img/content/ECS-Nintex-TravelScenarios43.png){:class="img-responsive"}

After determining the SAP personell number and storing it in workflow variable PersonellNumber, SAP integration is processed by *Call SAP Function Custom Action*. 
The basic functioning of this Custom Action is described in detail in the [online help](). 

First the condition is checked if the *Percentage* field in the SharePoint list is empty or not. If there is an entry that means an alternative cost assignment has been entered and the SAP function module has to be called with different input parameters. That's the reason why there are two parallel actions in the workflow. 
               
In the *Call SAP function* action* SAP function module **Z_FITP_CREATE_TRIP_FROM_REQUES** is called. This is a custom function module for creating travel requests in SAP and has to be implemented on your SAP system first. You find it in the download file for this solution.  
The input parameters are linked to the input fields of the SharePoint list (Travel Destination, etc.). For some fields some fixed values are set (e.g. MOREI = 01).  

The following input and output parameters are set:

**Input**

	    MOREI 	=  01

**Changings**

	    WA_REQ_HEAD.PERNR 				= Insert Reference -> Workflow Variables -> PersonellNumber
        WA_REQ_HEAD.REQUESTVRS			= 99
        WA _REQ_HEAD.PLAN 				= R
        WA_REQ_HEAD.LOCATION_END 		= Insert Reference -> Item Properties -> Travel Destination
        WA_REQ_HEAD.COUNTRY_END 		= Insert Reference -> Item Properties -> Country (Inline Function Substring is used to get only the first two characters)
        WA_REQ_HEAD.REQUEST_REASON 		= Insert Reference -> Item Properties -> Purpose
        WA_REQ_HEAD.DATE_BEG			= Insert Reference -> Item Properties -> Trip Start (Inline Function FormatDate is used to format the date)
        WA_REQ_HEAD.TIME_BEG			= Insert Reference -> Item Properties -> Trip Start Time (Inline Function Replace is used to get the right time format) 
        WA_REQ_HEAD.DATE_END			= Insert Reference -> Item Properties -> Trip End (Inline Function FormatDate is used to format the date)
        WA_REQ_HEAD.TIME_END			= Insert Reference -> Item Properties -> Trip End Time (Inline Function Replace is used to get the right time format) 
        WA_REQ_HEAD.ACTIVITY_TYPE		= Insert Reference -> Item Properties -> Activity Tipe (Inline Function Substring is used to get onlye the first two characters)
        WA_REQ_HEAD.ESTIMATED_COST   	= Insert Reference -> Workflow Variables -> TotalUSD
        WA_REQ_HEAD.CURRENCY			= USD
        WA_REQ_HEAD.STATUS				= 2     

**Tables (only if condition Percentage> 0 is fulfilled)**

**Table Input**

		PERNR 		= T_REQ_ACCOUNT
		REQUESTVRS	= Insert Reference -> Workflow Variables -> PersonellNumber 
		PLAN_REQUEST= 99 
		PLAN_REQUEST= R 
		ACCOUNT 	= 01 
		PERCENT 	= Insert Reference -> Item Properties -> Percentage
		BUKRS 		= 1000
		KOSTL 		= Insert Reference -> Item Properties -> Alternative Account Assignment

**Output**
	 	
	 	output.WA_HEAD.REINR	= Workflow Variables -> TripNumber

![ECS-Nintex-TravelScenarios44](/img/content/ECS-Nintex-TravelScenarios44.png){:class="img-responsive"}

Some input parameters are formatted into the right SAP format by using so called *Inline functions*. 

![ECS-Nintex-TravelScenarios45](/img/content/ECS-Nintex-TravelScenarios45.png){:class="img-responsive"}

As an output the SAP trip number is stored in workflow variable *TripNumber*.

![ECS-Nintex-TravelScenarios46](/img/content/ECS-Nintex-TravelScenarios46.png){:class="img-responsive"}

In the variant with alternative cost assignment additionally table **T_REQ_ACCOUNT** is mapped with input parameters. 

![ECS-Nintex-TravelScenarios47](/img/content/ECS-Nintex-TravelScenarios47.png){:class="img-responsive"}

After processing the *Call SAP function* Custom Action sucessfully, SharePoint list column *Trip Number* is updated and - as a last step before the workflow is finished - a new item in SharePoint list *Travel Expenses* is created.  This SharePoint list is used to add travel expenses to the previously created travel request. 

![ECS-Nintex-TravelScenarios49](/img/content/ECS-Nintex-TravelScenarios49.png){:class="img-responsive"}