

### DeltaQ Customizing in SAP

Using the{% if page.product == "xtract-is"%} Xtract{% endif %} DeltaQ component requires customizing in SAP, see [Customizing for DeltaQ](../sap-customizing/customizing-for-deltaq).

### Settings in the{% if page.product == "xtract-is"%} Xtract{% endif %} DeltaQ Component

When an RFC Destination is set up in SAP, the RFC destination and the RFC target system must be 

![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

#### Gateway

Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) to look up an [RFC destination](../sap-customizing/customizing-for-deltaq) or enter the data of your RFC destination manually:

**Host**<br>The name (or IP address) of your SAP system. <br>
Make sure that the Gateway host is the same as in your [SAP Connection](../getting-started/sap-connection).

**Service**<br>The gateway service is generally *sapgwNN*, where *NN* is the instance number of your SAP system, e.g., a number between *00* and *99*.
*NN* must have the same value as the *System No* field in your [SAP Connection](../getting-started/sap-connection) or the instance number in your SAP logon. 

**Program ID**<br>The name of the registered RFC server.
Make sure that the registration of the Program ID and the host is whitelisted in the reginfo ACL on the SAP Gateway, see [SAP Blog: RFC Gateway Security](https://blogs.sap.com/2021/01/26/rfc-gateway-security-part-1-basic-understanding/).

#### Log. Destination
Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) to look up a logical RFC target system or enter the name of the RFC target system manually.

### Customizing Check

In the main window of the component click **Customizing Check** to validate the DeltaQ customizing on the SAP system.
Make sure that all checks are green. 

![customizing-check-successful](/img/content/customizing-check-successfull.png){:class="img-responsive"}