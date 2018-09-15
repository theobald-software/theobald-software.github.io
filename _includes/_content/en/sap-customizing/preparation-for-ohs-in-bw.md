In order to be able to use the OHS data source, it is necessary to configure a few things in the SAP BW first, as described in the following.
Depending on the SAP release you can extract an OHS using InfoSpokes (< BI 7.0) or using an OHS destination (BI 7.0 or newer). SAP recommends from BI 7.0 on only the use of the OHS destination. Contrary to this recommendation we recommend even with BI 7.0 to use InfoSpokes because they are in practice more robust than the OHS destinations.
Please also note that the following instructions for creating InfoSpokes / OHS destinations should be seen as an introduction. Please also read the relevant notes in SAP OSS.

**RFC-Destination**

First, create an RFC destination of type *T* (=TCP/IP) in the transaction SM59. The activation type has to be a *registered server program*. The program ID can be selected arbitrarily, but must by all means be specified and be concise. Please make a note of this ID; it will be needed later on.

![OHS-BW-01](/img/content/OHS-BW-01.png){:class="img-responsive" } 

**InfoSpokes and Process Chains (< BI 7.0)**

Up to release BI 7.0, InfoSpokes are the pivotal point for Open Hub Services. If you are already using release 7.0, you can jump to the next section to learn how OHS destinations are handled.

Once inside transaction RSA1, you will find an interface for creating an InfoSpoke in the menu *Tools -> Open Hub Service -> Edit InfoSpoke*. Provide a data source here (e.g. an ODS object or a cube).

![OHS-BW-02](/img/content/OHS-BW-02.png){:class="img-responsive" }


In the *Destination* tab, define the InfoSpoke so that an extraction to a third-party system is possible (see screenshot). Be sure to enter the previously created RFC destination here.

![OHS-BW-03](/img/content/OHS-BW-03.png){:class="img-responsive" }


When you're done, the columns and, if applicable, selections to be transmitted have to be filled in. Afterwards the spoke can be saved and activated.
In the last step, we need a process chain. To proceed, go from transaction RSA1 to the menu *Edit -> Process Chains* and enter a new process chain there. In the variant for the chain, *start via API* must be marked. Then enter the previously created InfoSpoke in the chain. 

![OHS-BW-04](/img/content/OHS-BW-04.png){:class="img-responsive" }


Finally, you have to save the process chain and activate it.

**OHS Destinations and Data Transfer Processes (BI 7.0)**

From BI 7.0 on, SAP does not recommend using InfoSpokes anymore. Instead, OHS destinations should be created as described in following.
In the Administrator Workbench RSA1, click *Open Hub Destination* in the left-hand tree. With the right-hand mouse button, click an InfoArea and select *Create Open Hub Destination* in the context menu.

![OHS-BW-05](/img/content/OHS-BW-05.png){:class="img-responsive" }


In the editing mode, set the destination *type to third-party*, enter the previously created RFC destination, and save and activate the destination.


Click the newly created destination in the center tree of the InfoArea and select *Create data transfer* process. This action creates a new data transfer and the corresponding transmission rules (see screenshots).


![OHS-BW-07](/img/content/OHS-BW-07.png){:class="img-responsive" }


The DTP can be stored and activated as recommended by the system (depending on your particular needs, the extraction type should be changed from Delta to *full* prior to activation). In the OHS tree destination, the transmission rules and the DTP are then arranged as shown below:


To activate the transfer process, we now need a process chain. From the RSA1 transaction, go to the menu *Edit -> Process Chains*. Create a new process chain here. In the variant for the chain, start via API must be checkmarked. The DTP then has to be added in the process chain. Once activated, the chain is ready to run.


![OHS-BW-09](/img/content/OHS-BW-09.png){:class="img-responsive" }