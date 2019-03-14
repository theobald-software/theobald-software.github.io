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


Auf dieser Seite werden die notwendigen Schritte beschrieben, um SSO mit SNC und Kerberos für Xtract Universal einzurichten.
**Die hier beschriebenen Schritte setzen voraus, dass des SAP-Applikationsserver unter Windows läuft und für SNC mit Kerberos eingerichtet wurde/wird.**

1. Aktivierung von HTTPS in Xtract Universal 
2. Anlegen und konfigurieren eines Service Accounts, unter dem der Xtract Universal Service läuft.
3. Notwendige Einstellungen auf dem Server, auf dem der Xtract Universal Server läuft.
4. Notwendige Einstellungen in Xtract Universal.
5. Notwendige Einstellungen auf SAP-Seite.


## 1. Aktivierung von HTTPS in Xtract Universal

Diese Einstellung hat erstmal nicht direkt mit dem Einrichten von SSO zu tun, ist allerdings Voraussetzung dafür. SSO funktioniert nur, sofern der Extraktionsaufruf per HTTPS erfolgt. Hierfür muss ein X.509-Zertifikat in Xtract Universal bekannt gemacht werden.

1. Lassen Sie ein X.509-Zertifikat von Ihrem IT Netzwerk Team erstellen. In der Zertifikatseigenschaft "Subject Alternative Name" muss der DNS Name des Servers stehen, auf dem der Xtract Universal Windows Dienst läuft. Ansonsten erscheint das Zertifikat später nicht im Lookup Dialog von Xtract Universal.
2. Hinterlegen Sie das Zertifikat im Windows Certificate Store auf dem XU Server.
3. Machen Sie das Zertifikat in Xtract Universal bekannt.

![XU_WebServerSettings_https](/img/content/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}


*HTTPS Port*: Ändern Sie in den Server Settings unter dem Tab-Reiter *Web Server* den HTTPS Port auf den Wert 443 (standardmäßig steht dieser auf 8165).
![XU_SSO_httpsPort](/img/content/XU_SSO_HTTPS_Port.png){:class="img-responsive"}


## 2. Anlegen eines AD Service Accounts

Legen Sie einen Windows AD Service Account an. Das ist der Account, unter dem der Xtract Universal Service läuft (XU Service Account).

Definieren Sie im *Attribut-Editor* Tabreiter zwei *Service Principal Names (SPN)* in der Notation *HTTP/[XU FQDN host name]* und *HTTP/[XU host name]*. In nachfolgendem Screenshot ist *theosoftw2012r2* der host name, auf dem der XU Service läuft.
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_SPN.png){:class="img-responsive"}

Konfigurieren Sie den XU Service Account für *Constrained Delegation*. Hier wird der SPN des Accounts eingetragen, unter dem der SAP-Applikationsserver läuft (SAP Service Account).
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}


Im folgenden Screenshot ist [*SAPServiceERP/do_not_care*](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebb40b9920d1be10000000a114a6b.html) der SPN des SAP Service Accounts.
![XU_SSO_SPN_SAPService](/img/content/XU_SSO_SPN_SAPService.png){:class="img-responsive"}
 


 Lassen Sie den Xtract Universal Service unter diesem Account laufen.
![XU_ServiceAccount](/img/content/XU_Service_Account.png){:class="img-responsive"}


## 3. Notwendige Einstellungen auf dem Xtract Universal Server

* Kerberos Library auf Laufwerk kopieren
* Hinzufügen des XU Service Account zur Local Admin Gruppe (*compmgmt.msc*)
* Einstellungen für den XU Service Account in der Local Security Policy (*secpol.msc*)
* Registry-Eintrag hinzufügen


*Kerberos Wrapper Library*: Die relevante dll-Datei befindet sich als Anhang im [SAP Hinweis 2115486](https://launchpad.support.sap.com/#/notes/2115486). Wir gehen davon aus, dass Sie den Xtract Universal Service auf einem 64bit Betriebssystem betreiben. Bitte laden Sie daher die *gx64krb5.dll* herunter.

Legen Sie diese in einem beliebigen Verzeichnis, z.B. *C:\SNC\gx64krb5.dll*, des Rechners ab, auf dem der Xtract Universal Server läuft bzw. die SAP-Verbindung stattfindet.
Legen Sie die Datei ebenfalls auf jedem Rechner, auf dem der Xtract Universal Designer genutzt wird, in demselben Verzeichnis ab.  

*Registry-Einstellungen*: Legen Sie auf dem Server bitte folgenden Registry-Eintrag an:


SubKey:  HKEY_LOCAL_MACHINE\SOFTWARE\SAP\gsskrb5

Entry:   ForceIniCredOK

Type:    REG_DWORD

Value:   1


*XU Service Account als Local Admin*: Fügen Sie den XU Service Account zur Local Admin-Gruppe hinzu.

*Local Security Policy für XU Service Account*: Fügen Sie unter *Local Policies* - *User Rights Assignment* den Service Account bei *Act as part of the operating system* und *Impersonate a client after authentication* hinzu. 
![XU_SSO_LocSecPol](/img/content/XU_SSO_LocSecPol.png){:class="img-responsive"}


## 4. Einstellungen in Xtract Universal

Öffnen Sie die Einstellungen zur SAP Source.
* Wählen Sie *SNC* aus und haken Sie *Impersonate authenticated caller (SSO)* an.
* Unter *SNC library* geben Sie bitten den Pfad an, unter dem Sie die gx64krb5.dll aus *Schritt 3* abgelegt hatten.
* Als *Partner name* geben Sie bitte den SPN des SAP Service Accounts an (siehe Screenshot unter Punkt 2 oben). Bitte verwenden Sie diese Notation. *p:[SPN]@[Domain-FQDN-Uppercase]*.  

*Achtung:* 
* Im SAP Logon Pad wird im Falle von SNC der Partnername häufig im Format des UPN des SAP Service Accounts angegeben (*p:[SAP Service Account]@[Domäne]*). Das ist im Falle von Xtract Universal *falsch*. Bitte verwenden Sie, wie oben beschrieben, immer den SPN in der obigen Notation.
* SPNs sind case-sensitive, müssen also in korrekter Groß-/Kleinschreibung im SNC Partnernamen verwendet werden.


![XU_SSO_SAPSource](/img/content/XU_SSO_SAP_Source.png){:class="img-responsive"}


## 5. Einstellungen auf SAP-Seite

Lesen Sie bitte die notwendigen Einstellungen für Kerberos SNC in der [SAP Hilfe](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html) nach. Ein Anhaltspunkt dafür, ob die Einstellungen stimmen ist, dass Sie sich mit dem SAP Logon Pad per SSO am SAP System anmelden können.
