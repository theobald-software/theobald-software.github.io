<!-- 03.02.2021, YW -> Fabian: Ich würde den Step 2 - Create logical Destination - komplett rausnehmen. Der muss nicht durchgeführt werden, also weg damit. Damit dann auch die box-note
Ich persönlich finde, die Tabelle zur Erklärung der Input-Parameter ist etwas overkill. Zumal Du einige Einträge nicht erklärst und die Felder leer bleiben...
<!-- 03.02.2021, Fas -> Yogen: Ja ich habe den Schritt 2 lediglich übernommen. Ich selbe wurde mit diesem Problme noch nie konfrontiert. Ja mach ich gern. Die Tabellen sind erstellt worden, weil ich immer wieder Nachfragen von Kunden hatte. Nicht oft, aber regelmäßig. 
Ich kann ja die Beschreibung der offenen Zeilen noch ergänzen oder bist du komplett dagegen?

 -->

Before using the DeltaQ component an RFC destination has to be created in the SAP system. This is referred to as *DeltaQ customizing*.<br>
The DeltaQ customizing is explained step by step below.

{: .box-note }
**Note** The following steps, except step 2 - creation of the logical destination, are client-dependent.

### 1. Create RFC destination of type R/3
Create a new RFC destination of type R/3 in transaction *SM59*, e.g. with name **XTRACT01**, **Connection Type 3**. No connection test is necessary for the creation.

### 2. Create logical destination - optional

{: .box-note }
**Note** In the step *Execute function module RSAP_BIW_CONNECT_40*, the logical destination is automatically created. 

Use transaction *SALE* to create a logical system analogous to the name of the RFC destination.

![DeltaQ-Customizing-01](/img/content/DeltaQ-Customizing-01.png){:class="img-responsive"}

### 3. Execute function module RSAP_BIW_CONNECT_40
Go to transaction *SE37* and execute the module **RSAP_BIW_CONNECT_40** with the following import parameters. <br>


![DeltaQ-Customizing-02](/img/content/DeltaQ-Customizing-02.png){:class="img-responsive"}

{: .box-note }
**Note** This step assumes that the SAP system is modifiable.

Import parameter | Example value | Comment
------------ | ------------- | ------------
I_LANGU | EN
I_SLOGSYS | T90CLNT090 | Logical name of the source system. If you do not know this, look in table **T000** for the respective client (LOGSYS field).
I_LOGSYS | XTRACT01 | 
I_STEXT | Xtract Destination
I_BASIC_IDOC | ZXTIDOC | Unique name of the RFC destinations.
I_TSPREFIX | XT | Unique name of the RFC destinations.
I_SAPRL | 700 | Automatically set by the SAP system.
I_RESTORE | X

![DeltaQ-Customizing-03](/img/content/DeltaQ-Customizing-03.png){:class="img-responsive"}

### 4. Delete the RFC destination of type R/3 
Call transaction *SM59* and delete the RFC destination of type R/3 via **Detailed View > Menu > Delete**.

### 5. Create RFC destination of type T
Create a new destination of the *Connection Type* **T=TCP/IP** with identical name and set the following parameters.

Field | Example Value | Comment
------------ | ------------- | ------------
RFC Destination | XTRACT01 |
Connection Type | TCP/IP Connection |
Description 1| Xtract Destination | 
Activation Type | Registered Server Program |
Program ID | XTRACT01 |
Gateway Host | sap-erp-as05.example.com | Name or IP address of the SAP system.
Gateway service | sapgw00 | In the form sapgwnn, where nn is the SAP instance number, a two-digit number between *00* and *99*.

![DeltaQ-Customizing-04](/img/content/DeltaQ-Customizing-04.png){:class="img-responsive"}

### 6. Execute function module RSAS_RBWBCRL_STORE
Execution of the function block **RSAS_RBWBCRL_STORE** to activate the target system.

Import parameter | Example value 
------------ | -------------
I_RBWBCRL | 700 
I_RLOGSYS | XTRACT01

{: .box-note }
**Note:** The parameter *I_RBWBCRL* is the current SAP system release number.

![DeltaQ-Customizing-05](/img/content/DeltaQ-Customizing-05.png){:class="img-responsive"}

### 7. Registration of the RFC destination  
In our [Knowledge Base](https://kb.theobald-software.com/sap/registering-rfc-server-in-sap-releases-in-kernel-release-720-and-higher) you will find the instructions for registering the RFC server in SAP. 

{: .box-note }
**Note** This step applies to SAP kernel version 720 and higher.

### 8. qRFC Monitor (QOUT Scheduler)
Call transaction *SMQS*. Select the previously created RFC destination, e.g. **XTRACT01**. Then click on the button 'Register without activation' and change the parameter *Max.Verb.* to the value *10*. 
Increase this value in case of parallel execution of several DeltaQ extractions on the same RFC destination.

![DeltaQ-Customizing-06](/img/content/DeltaQ-Customizing-06.png){:class="img-responsive" }

{: .box-note }
**Note** For DeltaQ customizing errors, refer to the [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide).