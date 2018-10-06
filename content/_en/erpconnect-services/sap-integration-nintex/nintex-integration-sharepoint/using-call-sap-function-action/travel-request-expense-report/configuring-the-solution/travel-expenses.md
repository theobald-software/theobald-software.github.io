---
layout: page
title: Travel Expenses
description: Travel Expenses
product: erpconnect-services
parent: configuring-the-solution
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=travel_expenses
---

The **Travel Expenses** workflow is structured as follows: 


1. **Initial request by an employee or personell administrator:** An employee or personell administrator enters all the data required for the travel expense report and submits the request for approval. If there was a previously created travel request only little information has to be added in the request form. There is also the possibility to create a complete new expense report independently from a prior travel request.    
2. **Calculating the travel expenses:** After entering the expense types and saving the form, the workflow starts automaticalls and first calculates the total expense costs. With the integrated currency converter the costs are automatically converted into the right target currency.   
3. **Workflow performs approval process:** In several stages an approval process is accomplished where the approver with the correct approval limit is determined and where the travel expenses are posted to the SAP system after successful approval. 

The worfklow stages are described in more detail on the next few pages: 

**Add Expense Costs to Total**

The workflow starts with action set *Add Expense Costs to Total*. In this action set all expense costs are calculated. 

![ECS-Nintex-TravelExpenses1](/img/content/ECS-Nintex-TravelExpenses1.png){:class="img-responsive"}

The expense types are determined by workflow action *Get Form Detail Rows* which scans the receipt field in the Nintex form. The results are collected and stored into collection variables. The following workflow actions *For Each Expense Type, Get its amount* and *Get its Currency*  use this information and store the single values in workflow variables.   

![ECS-Nintex-TravelExpenses2](/img/content/ECS-Nintex-TravelExpenses2.png){:class="img-responsive"}

With User Defined Action *Convert to USD* the total amount is converted into US-Dollar and stored in variable *TotUSD*.
By using the parallel running actions QueryXML two XML input files containing information about expense types and costs are created which are used later on as an dynamic input for SAP integration. Because there is a difference in processing if a new request is created or a already existing request is modified two parallel actions generating two different XML files are processed here. 

![ECS-Nintex-TravelExpenses3](/img/content/ECS-Nintex-TravelExpenses3.png){:class="img-responsive"}

The structuring of the XML input files *XMLInputReceiptsNewTrip* and XMLInputReceipts is divided into two steps because the files have to be generated of different sequences. 
After generating the files the results are logged in the workflow history and the total amount for travel expenses is updated in list column *Gran Total*. 

![ECS-Nintex-TravelExpenses4](/img/content/ECS-Nintex-TravelExpenses4.png){:class="img-responsive"}

Now the first part of the **Travel Expenses** workflow is almost finished. Afterwards two more workflow variables are set which are needed in later stages and the workflow proceedes with a multi-stage approval process.  

![ECS-Nintex-TravelExpenses5](/img/content/ECS-Nintex-TravelExpenses5.png){:class="img-responsive"}

**Determine Next Approver**

In the workflow stage *Determine Next Approver* the next possible approver for the request is determined and the *Status* field is updated to *Determining Reviewer*. 

![ECS-Nintex-TravelExpenses6](/img/content/ECS-Nintex-TravelExpenses6.png){:class="img-responsive"}

With User Defined Action *Get User Info* the initiator's manager is determined and the result is stored in workflow variable *Reviewer*. 

![ECS-Nintex-TravelExpenses9](/img/content/ECS-Nintex-TravelExpenses9.png){:class="img-responsive"}

With workflow action *Get this reviewer's approval limit* the approval limit of the manager in charge is determined by looking up SharePoint list *Approver* where this information is stored. 

![ECS-Nintex-TravelExpenses23](/img/content/ECS-Nintex-TravelExpenses23.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios11](/img/content/ECS-Nintex-TravelScenarios11.png){:class="img-responsive"}

If there is no approval limit the workflow is finished, otherwise the workflow will proceede with workflow stage *Request Approval*.

![ECS-Nintex-TravelExpenses7](/img/content/ECS-Nintex-TravelExpenses7.png){:class="img-responsive"}

**Request Approval**

In the *Request Approval* stage the *Status* column is updated to *Reviewing* first.

![ECS-Nintex-TravelExpenses10](/img/content/ECS-Nintex-TravelExpenses10.png){:class="img-responsive"}

Then with the *Get Approval* workflow action the workflow request is submitted two the approver who was determined previously. Of course you can individually configure this action according to your requirements. 

![ECS-Nintex-TravelExpenses11](/img/content/ECS-Nintex-TravelExpenses11.png){:class="img-responsive"}

If a manager rejects the request the workflow proceedes with stage *Process Rejection* otherwise the review time is determined using the *Calculate Date* action and list columns *Reviewed On, Reviewed By* and *Review Status* are updated. At this moment the approval status is set to *Approved provisionally*.


Then it is checked if the manager's approval limit is high enough to approve the request. 

![ECS-Nintex-TravelExpenses13](/img/content/ECS-Nintex-TravelExpenses13.png){:class="img-responsive"}

![ECS-Nintex-TravelExpenses12](/img/content/ECS-Nintex-TravelExpenses12.png){:class="img-responsive"}

If that's the case the workflow proceedes with workflow stage *Process Approval*. If it's not, the workflow switches back to status *Determine Next Approver* to find the next-higher-level manager with a corresponding sufficient approval limit.


**Process Approval**

In workflow stage *Process Approval* the expense report is posted to the SAP system. 

![ECS-Nintex-TravelExpenses14](/img/content/ECS-Nintex-TravelExpenses14.png){:class="img-responsive"}

First a notification is sent to the initiator that the request has been approved.  

![ECS-Nintex-TravelExpenses15](/img/content/ECS-Nintex-TravelExpenses15.png){:class="img-responsive"}

Then list column *ReviewStatus* is set to *Approved* and SAP integration is initiated.
First it is checked by a condition if it is new travel expense report or if the report refers to a prior travel request. Either way another SAP function module is used to post the data to the SAP system. After that it is also checked with a condition Action if an alternative cost assignment has been entered or not. Depending on the outcome, the SAP function module's input parameters have to be defined differently.  

![ECS-Nintex-TravelExpenses25](/img/content/ECS-Nintex-TravelExpenses25.png){:class="img-responsive"}

**New expense report (_Condition Trip Number exists not fulfilled_)**

In case of a new, autonomous travel expense report the *Call SAP Function* Action uses SAP standard function module **_BAPI_TRIP_CREATE_FROM_DATA_**. With this function module the expense report is posted to the SAP system. As input parameters the values entered to the SharePoint list via Nintex Forms and some fixed values are used.

![ECS-Nintex-TravelExpenses17](/img/content/ECS-Nintex-TravelExpenses17.png){:class="img-responsive"}

The following input and output parameters are set:

**Input parameters**

            EMPLOYEENUMBER			= Insert Reference -> Workflow Variables -> PersonellNumber
            FRAMEDATA.DEP_DATE		= Insert Reference -> Item Properties -> Trip Start (Inline Function FormatDate is used to format the date)
            FRAMEDATA.ARR_DATE		= Insert Reference -> Item Properties -> Trip End (Inline Function FormatDate is used to format the date)	
            FRAMEDATA.CUSTOMER		= Insert Reference -> Item Properties -> Purpose
            FRAMEDATA.LOCATION		= Insert Reference -> Item Properties -> Travel Destination 
            FRAMEDATA.COUNTRY 		= Insert Reference -> Item Properties -> Country (Inline Function Substring is used to get only the first two characters)
            FRAMEDATA.T_SCHEMA		= 01
            STATUS.APPROVED			= 3

**Tables (only if condition Percentage> 0 is fulfilled)**

            Table Input			= COSTDIST_TRIP			
            PERC_SHARE 			= Insert Reference -> Item Properties -> Percentage
            COMP_CODE			= 1000
            COST_CENTER			= Insert Reference -> Item Properties -> Alternative Account Assignment

**Tables (used in both variants)**

		Additional XML Table input	= XMLInputReceiptsNewTrip

**Output**

			output.TRIPNUMBER 		= Workflow Variables -> TripNumber
			output.RETURN.MESSAGE	= Workflow Variables -> SAP Return Message

Crucial for the correct posting to the SAP system is the additional XML table input you find in the *Tables* section. Previously generated workflow variable *XMLInputReceiptsNewTrip* is used as XML input here. 

![ECS-Nintex-TravelExpenses18](/img/content/ECS-Nintex-TravelExpenses18.png){:class="img-responsive"}

**Adding travel expenses to an existing travel request (_Condition Trip Number exists is fulfilled_)**

If the workflow initiator wants to add a travel expens report to an existing travel request SAP function ***Z_HRTV_IF_MODIFY_TRIP*** is called. It's a custom function module, that has to be implemented on the SAP system first. 

With this function module the travel expense report is posted for a existing trip number. As input parameters the values entered to the SharePoint list via Nintex Forms and some fixed values are used.

![ECS-Nintex-TravelExpenses19](/img/content/ECS-Nintex-TravelExpenses19.png){:class="img-responsive"}

The following input and output parameters are set:

Input parameters

	    EMPLOYEENUMBER			= Insert Reference -> Workflow Variables -> PersonellNumber
	    FRAMEDATA.DEP_DATE		= Insert Reference -> Item Properties -> Trip Start (Inline Function FormatDate is used to format the date)
        FRAMEDATA.ARR_DATE		= Insert Reference -> Item Properties -> Trip End (Inline Function FormatDate is used to format the date)	
        FRAMEDATA.CUSTOMER		= Insert Reference -> Item Properties -> Purpose
        FRAMEDATA.LOCATION		= Insert Reference -> Item Properties -> Travel Destination 
        FRAMEDATA.COUNTRY 		= Insert Reference -> Item Properties -> Country (Inline Function Substring is used to get only the first two characters)
        FRAMEDATA.T_SCHEMA		= 01
        STATUS.APPROVED			= 3
        TRIPNO					= Insert Reference -> Item Properties -> TripNumber


**Tables (Only if condition Percentage> 0 is fulfilled)**

        Table Input			= COSTDIST_TRIP			
        PERC_SHARE 			= Insert Reference -> Item Properties -> Percentage
        COMP_CODE			= 1000
        COST_CENTER			= Insert Reference -> Item Properties -> Alternative Account Assignment 

**Tables (used in both variants)**

        Additional XML Table input	= XMLInputReceipts
        XML output table 			= RETURN
        XML output variable			= SAP Return Message

The crucial point for creating the expense types and costs in the SAP system is the additional XML Input using variable *XMLInputReceipts*.

![ECS-Nintex-TravelExpenses20](/img/content/ECS-Nintex-TravelExpenses20.png){:class="img-responsive"}

Then SharePoint list column *Trip Number* is updated. 

![ECS-Nintex-TravelExpenses26](/img/content/ECS-Nintex-TravelExpenses26.png){:class="img-responsive"}

After that for both variants function module ***Z_BAPI_TRIP_CHANGE_STATUS*** is called. It's a custom function module which has to be implemented first on your SAP system. With this function module the complete business trip is set on status approved in the SAP system. In the SAP system that means for example that the travel expenses can be transferred to the accounting department.

![ECS-Nintex-TravelExpenses27](/img/content/ECS-Nintex-TravelExpenses27.png){:class="img-responsive"}

The following input and output parameters are set:

**Input parameters**

	    ACCOUNT_NEW			= 1
        APPROVED_NEW		= 2
        EMPLOYEENUMBER 		= Insert Reference -> Workflow Variables -> PersonellNumber	
        TRIPNUMBER			= Insert Reference -> Item Properties -> TripNumber

**Output**	 

	    output.RETURN.MESSAGE 	= RetMessChangeStatus


After calling this function module SharePoint list column *Expensed* is set to Yes and the workflow is finished. 


**Process Rejection**


In workflow stage *Process Rejection* rejected expense requests are processed. 

![ECS-Nintex-TravelExpenses21](/img/content/ECS-Nintex-TravelExpenses21.png){:class="img-responsive"}

The initiator gets a notification that his request was rejected. 

![ECS-Nintex-TravelExpenses28](/img/content/ECS-Nintex-TravelExpenses28.png){:class="img-responsive"}

After that the current date is determined and updated in list column *Reviewed On* and furthermore list column *Review Status* is updated to value *Rejected*. <br>
With this the workflow is finished.   