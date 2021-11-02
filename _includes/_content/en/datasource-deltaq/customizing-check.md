### Settings

1. Open the DeltaQ extraction.
2. Fill in the fields on the top right. Search for technical settings from the drop-down menu by clicking **Search** (magnifying glass symbol). The settings are defined in [DeltaQ Customizing](../sap-customizing/customizing-for-deltaq).


![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

**Log. Destination**<br>Enter the logical RFC target system.

**Gateway Host**<br>Enter the name (or IP address) of your SAP system. <br>
Make sure that the Gateway Host is the same as in your SAP Connection.

**Gateway Service**<br>The gateway service is generally *sapgwNN*, where *NN* is the instance number of your SAP system e.g., a number between *00* and *99*.
*NN* must have the same value as the *System No* field in your SAP connection or the instance number in your SAP logon. 

**Program ID**<br>Enter the name of the registered RFC server.
Make sure that the registration of the Program ID (e.g., XTRACT01) and the host is whitelisted in the reginfo ACL on the SAP Gateway, see [SAP Blog: RFC Gateway Security](https://blogs.sap.com/2021/01/26/rfc-gateway-security-part-1-basic-understanding/) for more information.


The values **Gateway Host** and **Gateway Service** correspond to the following SAP connection:

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"} 

### Customizing Check

Click **[Customizing Check]** to validate the DeltaQ Customizing on the SAP system.
Make sure that all lines are green. 

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}