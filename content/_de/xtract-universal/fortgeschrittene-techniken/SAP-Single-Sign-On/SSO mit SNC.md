---
ref: xu-advanced-techniques-07
layout: page
title: SSO und SNC
description: SSO und SNC
product: xtract-universal
parent: SAP-Single-Sign-On
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: 
---

**SSO in Xtract Universal und SNC mit Kerberos**

Auf dieser Seite werden die notwendigen Schritte beschrieben, um SSO mit SNC und Kerberos für Xtract Universal einzurichten.
Die hier beschriebenen Schritte setzen voraus, dass des SAP-Applikationsserver unter Windows läuft und für SNC die Kerberos Library verwendet wird.

1. Aktivierung von SSL in Xtract Universal 
2. Anlegen eines AD Service Accounts, unter dem der Xtract Universal Service läuft.
3. Notwendige Einstellungen auf dem Server, auf dem der Xtract Universal Server läuft.
4. Notwendige Einstellungen in Xtract Universal.
5. Einstellungen auf SAP-Seite.


**Zu 1: Aktivierung von SSL in Xtract Universal**
Diese Einstellung hat erstmal nicht direkt mit dem Einrichten von SSO zu tun, ist allerdings Voraussetzung dafür. SSO funktioniert nur, sofern der Extraktionsaufruf per https erfolgt. Hierfür muss ein SSL-Zertifikat in Xtract Universal bekannt gemacht werden.

1. Lassen Sie ein TLS Zertifikat (X.509) von Ihrem IT Netzwerk Team erstellen. In der Zertifikatseigenschaft "Subject Alternative Name" muss der DNS Name des Servers stehen, auf dem der Xtract Universal Windows Dienst läuft. Ansonsten erscheint das Zertifikat später nicht im Lookup Dialog von Xtract Universal.
2. Hinterlegen Sie das Zertifikat im Windows Certificate Store auf dem XU Server.
3. Machen Sie das Zertifikat in Xtract Universal bekannt.

![XU_WebServerSettings_https](/img/content/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}


**Zu 2.  Anlegen eines AD Service Accounts**

Legen Sie einen Windows AD Service Account an. Das ist der Account, unter dem der Xtract Universal Service läuft.

Konfigurieren Sie den Account für *Constrained Delegation*. Im folgenden Screenshot ist *SAPServiceERP* der Windows Account, unter dem der SAP-Applikationsserver läuft.
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_SPN.png){:class="img-responsive"}


Definieren Sie einen oder mehrere *Service Principal Names (SPN)* in der Notation HTTP/[XU FQDN host name]
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_SPN.png){:class="img-responsive"}


 Lassen Sie den Xtract Universal Service unter diesem Account laufen.
![XU_ServiceAccount](/img/content/XU_Service_Account.png){:class="img-responsive"}






**Die Kerberos Wrapper Library herunterladen**

Die relevanten dll-Dateien befindet sich als Anhang im [SAP Hinweis 2115486](https://launchpad.support.sap.com/#/notes/2115486). Bitte laden Sie diese herunter und legen Sie diese in einem beliebigen Ordner des Rechners ab, auf dem der Xtract Universal Server läuft bzw. die SAP-Verbindung stattfindet. Innerhalb von Xtract Universal können Sie dann in den Settings zur SAP Source auf den Ordner verweisen, in dem Sie die dll abgelegt haben. Es gibt für 32-Bit und 64-Bit Plattformen zwei unterschiedliche Versionen der Kerberos Wrapper Library:  

- Für 32-Bit: gsskrb5.dll 
- Für 64-Bit x86: gx64krb5.dll 


