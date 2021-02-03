<!-- YW. 03.02.2021 -> Fabian: Das  Kapitel muss demnächst nochmals überarbeitet werden, wenn die neue OHS veröffentlicht wird. -->

Before using the OHS component the following steps have to be performed in the SAP system.

Depending on the SAP release, an OHS extraction can be used as follows:

|SAP release| SAP object |
|:----|:----|
| BI < 7.0 | InfoSpoke |
| BI >= 7.0 | OHS-Destination |


<!-- YW. 03.02.2021 -> Fabian: InfoSpokes werden nicht mehr empfohlen, diese Empfehlung ist mehrere Jahre alt und gilt nicht mehr. -->

### Creating an RFC destination

1. Create an RFC destination of type *TCP/IP* using transaction *SM59*. (1)
2. The activation type must be *Registered Server Program*. (2)
3. Enter any name in the field *Program ID*. (3)

{: .box-note }
**Note:** The name of the Program ID is needed again for later configuration.

![OHS-BW-01](/img/content/ohs_destination.png){:class="img-responsive"}

### InfoSpokes and process chains (BI < 7.0)

1. Create an InfoSpoke using transaction *RSA1* via the menu **Tools -> Open Hub Service -> Infospoke**. 
2. Store data source in the InfoSpoke, e.g. ODS object or cube. 
3. Define an InfoSpoke for data extraction into an external system in the *Destination* tab. 
4. Specify the RFC destination created in advance. 
5. Fill in the columns to be transferred and, if necessary, a selection. 
6. Save and activate the InfoSpoke. 
7. Generate a process chain with transaction *RSA1* in the menu **Edit -> Process Chains**. 
8. Check Start by *API* in the variant for the process chain. 
9. Insert the previously created InfoSpoke into the process chain. 
10. Save and activate the process chain.

### OHS Destinations and Data Transfer Processes (BI >= 7.0)

1. In the Administrator Workbench, click on *Open Hub Destination* in the left tree using transaction *RSA1*. Right-click on an InfoArea and select *Create Open Hub Destination* in the context menu. 
![OHS-BW-02](/img/content/ohs_1.png){:class="img-responsive"}
2. In the edit mode of the destination, set the *Destination Type* to *Third Party Tool* and enter the previously created OHS destination.
![OHS-BW-03](/img/content/ohs_2.png){:class="img-responsive"}
3. Save and activate the OHS destination. 
4. Create a new data transfer process (DTP) and associated transformations. Click on the newly created OHS destination in the middle tree of the InfoAreas and select *Create Data Transfer Process*. 
5. Save and activate the DTP (if necessary, change the extraction type from *Delta* to *Full* before activating). The arrangement of Destination, Transformations and DTP in the OHS tree is done afterwards.
6. Create a process chain containing the DTP created in the previous step. 7.
7. Make sure that the planning option *Start Using Meta Chain or API* is selected in the process chain start variant. 
8. Activate the process chain.
![OHS-BW-02](/img/content/ohs_4.png){:class="img-responsive"}
![OHS-BW-02](/img/content/ohs_5.png){:class="img-responsive"}
![OHS-BW-02](/img/content/ohs_7.png){:class="img-responsive"}


****
#### Related Links
- [SAP Note 2437637](https://launchpad.support.sap.com/#/notes/2437637)
- [SAP Note 1983356](https://launchpad.support.sap.com/#/notes/1983356)

