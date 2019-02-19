---
ref: xu-advanced-techniques-07
layout: page
title: SSO mit Kerberos SNC
description: SSO mit Kerberos SNC
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
5. Notwendige Einstellungen auf SAP-Seite.


**Zu 1: Aktivierung von SSL in Xtract Universal**

Diese Einstellung hat erstmal nichts direkt mit dem Einrichten von SSO zu tun, ist allerdings Voraussetzung dafür. SSO funktioniert nur, sofern der Extraktionsaufruf per https erfolgt. Hierfür muss ein SSL-Zertifikat in Xtract Universal bekannt gemacht werden.

1. Lassen Sie ein TLS Zertifikat (X.509) von Ihrem IT Netzwerk Team erstellen. In der Zertifikatseigenschaft "Subject Alternative Name" muss der DNS Name des Servers stehen, auf dem der Xtract Universal Windows Dienst läuft. Ansonsten erscheint das Zertifikat später nicht im Lookup Dialog von Xtract Universal.
2. Hinterlegen Sie das Zertifikat im Windows Certificate Store auf dem XU Server.
3. Machen Sie das Zertifikat in Xtract Universal bekannt.

![XU_WebServerSettings_https](/img/content/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}


*https-Port*: Ändern Sie in den Server Settings unter dem Tab-Reiter *Web Server* den HTTPS Port auf den Wert 443 (standardmäßig steht dieser auf 8165).
![XU_SSO_httpsPort](/img/content/XU_SSO_HTTPS_Port.png){:class="img-responsive"}


**Zu 2: Anlegen eines AD Service Accounts**

Legen Sie einen Windows AD Service Account an. Das ist der Account, unter dem der Xtract Universal Service läuft (XU Service Account).

Konfigurieren Sie den Account für *Constrained Delegation*. Im folgenden Screenshot ist *SAPServiceERP* der Windows Account, unter dem der SAP-Applikationsserver läuft.
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}


Definieren Sie im *Atribut-Editor* Tabreiter zwei *Service Principal Names (SPN)* in der Notation *HTTP/[XU FQDN host name]* und *HTTP/[XU host name]*
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_SPN.png){:class="img-responsive"}


 Lassen Sie den Xtract Universal Service unter diesem Account laufen.
![XU_ServiceAccount](/img/content/XU_Service_Account.png){:class="img-responsive"}


**Zu 3: Notwendige Einstellungen auf dem Xtract Universal Server**

* Kerberos Library auf Laufwerk kopieren
* Hinzufügen des XU Service Account zur Local Admin Gruppe (*compmgmt.msc*)
* Einstellungen für den XU Service Account in der Local Security Policy (*secpol.msc*)



*Kerberos Wrapper Library*: Die relevante dll-Datei befindet sich als Anhang im [SAP Hinweis 2115486](https://launchpad.support.sap.com/#/notes/2115486). Wir gehen davon aus, dass Sie den Xtract Universal Service auf einem 64bit Betriebssystem betreiben. Bitte laden Sie daher die *gx64krb5.dll* herunter.

Legen Sie diese in einem beliebigen Verzeichnis, z.B. *C:\SNC\gx64krb5.dll*, des Rechners ab, auf dem der Xtract Universal Server läuft bzw. die SAP-Verbindung stattfindet.
Legen Sie die Datei ebenfalls auf jedem Rechner, auf dem der Xtract Universal Designer genutzt wird, in demselben Verzeichnis ab.  


*XU Service Account als Local Admin*: Fügen Sie den XU Service Account zur Local Admin-Gruppe hinzu.

*Local Security Policy für XU Service Account*: Fügen Sie unter *Local Policies* - *User Rights Assignment* den Service Account bei *Act as part of the operating system* und *Impersonate a client after authentication* hinzu. 
![XU_SSO_LocSecPol](/img/content/XU_SSO_LocSecPol.png){:class="img-responsive"}


**Zu 4: Einstellungen in Xtract Universal**


Öffnen Sie die Einstellungen zur SAP Source. Wählen Sie *SNC* aus und haken Sie *Impersonate authenticated caller (SSO)* an. Unter *SNC library* geben Sie bitten den Pfad an, unter dem Sie die gx64krb5.dll aus *Schritt 3* abgelegt hatten. Als *Partner name* geben Sie bitte den Service Account an, unter dem der SAP Applikationsserver läuft, und zwar in dieser Notation. *p:[Service Account]/[Domain]*
![XU_SSO_SAPSource](/img/content/XU_SSO_SAP_Source.png){:class="img-responsive"}


**Zu 5: Einstellungen auf SAP-Seite.**

Lesen Sie bitte die notwendigen Einstellungen für Kerberos SNC in der [SAP Hilfe](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html) nach. Anhaltspunkt dafür, ob die Einstellungen stimmen ist, dass Sie sich mit dem SAP Logon Pad per SSO am SAP System anmelden können.
