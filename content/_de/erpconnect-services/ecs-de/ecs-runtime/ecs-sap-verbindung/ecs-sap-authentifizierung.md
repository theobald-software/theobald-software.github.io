---
ref: ecs-runtime-sap-connection-02
layout: page
title: SAP-Authentifizierung
description: SAP-Authentifizierung
product: erpconnect-services
parent: ecs-sap-verbindung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-sap-authentifizierung
---

ERPConnect Services Runtime (ECSR) bietet die folgenden Authentifizierungsoptionen für die SAP-Verbindung, welche Ihnen bei der Anlage der ECSR-Anwendung zur Verfügung stehen: 

![ECS-SAP-Authentication](/img/content/ECS-SAP-Authentication.png){:class="img-responsive"}

**Secure Store Services**<br>
ECSR nutzt die SharePoint Secure Store Services, um die SAP-Anmeldedaten des angemeldeten SharePoint-Benutzers zu erhalten.<br>
Wählen Sie dazu die Option **Secure Store Application ID**, um eine existierende Secure Store Anwendung zu wählen.

**Technical Access (Benutzername und Passwort)**<br>
Wählen Sie diese and setzen Sie die Felder **Username** und **Password** mit dem Benutzernamen und Passwort des SAP-Benutzers.

**SNC / Partner Name**<br> 
Wenn Ihr SAP-System für den Zugriff über SSO mit SNC konfiguriert ist, können Sie die Option SNC wählen und den Partner Name setzen.<br>
Partner Name hat die Form: **p:sapservicensp@theobald-software.com.** 

Stellen Sie noch sicher, dass der c2WTS-Service im Sharepoint unter "Service on Server" und als Windows Service aktiviert ist. <br>
Für den c2WTS-Service müssen Sie noch definieren, welche Active-Directory-Gruppen und -Benutzer auf den Service zugreifen dürfen (im Abschnit ).

**SSO Ticket**<br>
ECSR nutzt ein SAP SSO Ticket. Wählen Sie entweder die Option **SSO Ticket** und setzen Sie das **Ticket Issuer URL** oder wählen Sie die Option **SSO ticket (pass-through)**. Für den letzten Fall zeigt das folgende C#-Beispiel, wie Sie mit Hilfe von ERPConnect ein SSO Ticket holen, um anschließend ein ERPConnectServicesClient zu definieren:


<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("sbi.theobald-software.com", 0, "Elzein", "Password", "EN", "800");
string ssoTicket = con.GetSSOTicket();
ERPConnectServiceClient client = new ERPConnectServiceClient("ECS SAP SOO Ticket", ssoTicket);
{% endhighlight %}
</details>
