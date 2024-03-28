For Transport encryption and authentication it is required to install an X.509 certificate.

There are two main approaches for creating an X.509 certificate:
- Certificate released by an (internal) certification authority (CA) 
- Self-signed certificate

{% if page.product == "board-connector" %}

{: .box-note }
**Note:**
When using Board Cloud, make sure to use a certificate released by a public certification authority (CA).

{% endif %}


{: .box-note }
**Note:** On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA). 

### Create X.509 Certificate

Make sure to have a TLS certificate issued by your IT network team considering the following points:
 
- The certificate property “Subject Alternative Name” contains the DNS name of the server on which the Windows service (e.g. Xtract Universal Service or Board Connector Service) is running. 
- Place the certificate in the [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) on the machine, on which the Windows service is running.
- The certificate common name (CN) attribute contains the DNS name of the server. 

{: .box-tip }
**Tip:** To display the Common Name (CN) of the certificate, double-click the certificate in the Cetrificate Manager and navigate to the *Details* tab.

### Integrate X.509 certificate

1. Import the certificate to the Windows Certificate Store using Microsoft Management Console (mmc).
In the example shown, the server name is "TODD":
![XU-X509-MMC](/img/content/XU-X509-MMC.png){:class="img-responsive"}
2. Reference to the certificate in the Designer under **Server > Settings > Tab *Web Server* > [Select X.509 certificate]**.
The name of the currently saved certificate is displayed at the bottom of the window.
![Server-settings_manage](/img/content/server-settings_manage.png){:class="img-responsive"}
![Server-settings_manage](/img/content/server-settings-certificate-web.png){:class="img-responsive"}
![Server-settings_manage](/img/content/certificate-edit-location.png){:class="img-responsive"}
![Server-new-start](/img/content/xu/restart-server.png){:class="img-responsive"}
3. Confirm with **[OK]**. The performed changes are activated by restarting the XU server.


#### Related Links:
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
- [Setting Up an XU Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account)
