<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> Those steps for the DeltaQ customizing except step 2 are client specific.
</div>  

In order to be able to use the DeltaQ components, some customizing settings have to be made in SAP as described step-by-step in the following:

### STEP 1

Use transaction `SM59` to create an RFC destination of type `3`, e. g.  name it `XTRACT01`. 

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> You don't need to conduct a transmission test - only the destination has to be created
</div> 

### STEP 2 [optional]

STEP 2 to create a logical system is optional, since the functional module in STEP 3 will automatically create it if it does not exist. 
 
With the help of the SALE transaction, create a logical system with the same name as your destination in STEP 1.

![DeltaQ-Customizing-01](/img/content/DeltaQ-Customizing-01.png){:class="img-responsive" }

### STEP 3

Go to transaction SE37 and bring up the `RSAP_BIW_CONNECT_40` module in the test environment. 

Fill in your import parameters as shown in the screenshot. 

The parameter `I_SLOGSYS` is the logical name of the source system. If you're not sure what this is,<br> consult the `T000` table for the respective client (LOGSYS field). 

The field `I_SAPRL` will have a default value set by the SAP system.

Then execute the function module using F8.

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> This STEP needs some parts (2-3) of the SAP System to be modifiable.
</div>

**Caution:** 
The values for the parameters `I_BASIC_IDOC` and `I_TSPREFIX` must be **unique** for the different RFC Destinations.
If you set the values ZXTIDOC and XT for XTRACT01, you can set e.g. ZX2IDOC and X2 for XTRACT02.

![DeltaQ-Customizing-03](/img/content/DeltaQ-Customizing-03.png){:class="img-responsive" }

### STEP 4

Now go back into the `SM59` transaction and delete the destination that you created in STEP 1 
(Detailed *View -> Menu -> Delete*). 

Then create a new destination with exactly the same name, but this time of the type `T = TCP/IP`. The activation type has to be a *Registered Server Program*. Enter the name of the destination for the program ID.

Set the following fields:

**Gateway Host:** is the name (or IP address) of your SAP system (`ptmalg` is the name of our SAP system used in this example)<br>
**Gateway Service:** is generally `sapgwNN`, where NN is the ID of your SAP system, i.e. a number between 00 and 99. 

![DeltaQ-Customizing-04](/img/content/DeltaQ-Customizing-04.png){:class="img-responsive" }

**Optional:** Change the tRFC options for the RFC destination you just created. In `SM59` go to 
*Edit - tRFC Options* and set the *parameter Connection attempts up to task to 30* and *Time betw*. 2 tries *[min]* to 2. 

### STEP 5

Launch the `RSAS_RBWBCRL_STORE` module as shown below. Its purpose is to activate the new target system.

![DeltaQ-Customizing-05](/img/content/DeltaQ-Customizing-05.png){:class="img-responsive" }

### STEP 6

Refer to our [knowledge base](https://kb.theobald-software.com/sap/registering-rfc-server-in-sap-releases-in-kernel-release-720-and-higher) for registering the RFC Server in SAP

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> STEP 6 is for SAP Kernel Release 720 or higher.
</div>


### STEP 7

Go to SAP transaction `SMQS`. Select the destination created in STEP 4, e.g. XTRACT01. Use button `Register without activation` (or `Reg. o. Aktivierung`) and change the Max.Conn. parameter to 10. Increase this value when running several DeltaQ extractions in parallel on the same RFC destination.

![DeltaQ-Customizing-06](/img/content/DeltaQ-Customizing-06.png){:class="img-responsive" }


For any Errors please refer to our [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/xtract-is/deltaq-troubleshooting-guide).              
