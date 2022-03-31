---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: fortgeschrittene-techniken
childidentifier: sap-single-sign-on
permalink: /:collection/:path
weight: 6
lang: de_DE
---

### Anwendungsfall

BI Client Tools wie z.B. Power BI, Power Pivot, alteryx, etc. können Extraktionen in Xtract Universal starten. Die extrahierten Daten werden von Xtract Universal direkt in diese Tools geladen.
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Zugangsdaten desjenigen (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion angestoßen wurde. 
Dadurch greifen die SAP-Berechtigungen des ausführenden Benutzers, was z.B. häufig bei der Extraktion von BW/BEx Queries eine Rolle spielt.

Das heisst, die Windows-Zugangsdaten dieses Benutzers müssen via Xtract Universal an SAP weitergeleitet werden. Auf dem Weg dorthin oder auf SAP-Seite besteht ein Mapping zwischen Windows-Benutzer und dessen SAP-Zugangsdaten.

Prinzipiell lässt sich dieses *Single Sign On (SSO)* mit Xtract Universal über drei unterschiedliche Verfahren darstellen:

1. Mit Secure Network Communication (SNC) und SAPs Kerberos Wrapper Library
2. Mit Secure Network Communication (SNC) und SAPs Cryptographic Library
3. Mittels SAP Logon Ticket


### SSO in Xtract Universal und SNC mit Kerberos Wrapper Library

Für die Nutzung dieses Verfahrens *müssen* folgende Voraussetzungen zwingend erfüllt sein:

1. Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
2. Der BI Client (der die Extraktion in  Xtract Universal aufruft) läuft unter Windows.
3. Als SNC-Lösung wird die SAP Kerberos Wrapper Library (gsskrb5) verwendet.


*Hintergrundinformationen:*

Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - also z.B. SAPs Common Crypto Library **oder** gsskrb5, aber nicht beides gleichzeitig.
Das hier beschriebene Verfahren funktioniert ausschließlich mit der gsskrb5. 

Damit das Weiterreichen der Windows Zugangsdaten durch Xtract Universal funktioniert, muss die SNC-Lösung das unterstützen. 
Da Active Directory auf Kerberos basiert, muss dafür das "Double Hop"-Problem gelöst werden: Kerberos erlaubt aus Sicherheitsgründen das Weitergeben von Zugangsdaten nicht. 
Es gibt aber Kerberos-Erweiterungen von Microsoft (S4U-Extensions), die das ermöglichen. Diese Erweiterungen sind auch als "Constrained Delegation" bekannt.

Die Common Crypto Library von SAP unterstützt das lt. Aussage des SAP Supports explizit nicht. 
Die Kerberos Wrapper Library (gsskrb5) von SAP unterstützt das, und ist bei mehreren Kunden im Einsatz. 
Das bedeutet, dass für dieses Szenario die Kerberos Wrapper Library oder eine entsprechende Third-Party-Lösung eingesetzt werden muss.

Da die Kerberos Wrapper Library die Microsoft-Extensions für Kerberos verwendet, um das Double-Hop-Problem zu umgehen, gibt es sie nur für Windows. 
Sie funktioniert nur mit SAP-Applikationsservern unter Windows und Clients unter Windows.

*Weitere Informationen:*
- [Microsoft-Dokumentation: Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))
- [Microsoft-Dokumentation: Understanding Kerberos Double Hop](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)
- [SAP-Dokumentation: Single Sign-On mit Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)


### SSO in Xtract Universal mit SAPs Cryptographic Library

Für die Nutzung dieses Verfahrens *müssen* folgende Voraussetzungen zwingend erfüllt sein:
1. Der BI Client (der die Extraktion in  Xtract Universal aufruft) läuft unter Windows.
2. Als SNC-Lösung wird der SAP Secure Login Client verwendet.

*Hintergrundinformationen:*

Die Authentifizierung gegen SAP erfolgt über X.509 Client-Zertifikate.
Damit Xtract Universal Zugriff auf die Client-Zertifikate der Windows AD Benutzer hat, wird in den Active Directory Certificate Services ein Enrollment Agent definiert, der Zertifikate im Namen der Benutzer anmelden kann.
1. Windows AD Benutzer authentifizieren sich gegen Xtract Universal via Kerberos.
2. Der Xtract Universal Server prüft, ob für den Benutzer ein Zertifikat im Certificate Store des ausführenden Service Accounts verfügbar ist.
Falls kein Zertifikat verfügbar ist, wird über den Enrollment Agent ein neues Zertifikat im Namen des Benutzers angemeldet.
3. Der Xtract Universal Server konfiguriert den SAP Secure Login Client, um die Zertifikate für die Authenthifizierung gegen SAP zu verwenden und öffnet via SNC die Verbindung.


*Weitere Informationen:*
- [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP-Dokumentation: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)

### SSO in Xtract Universal via SAP Logon Ticket

Falls eine der oben genannten Voraussetzungen nicht gegeben sein sollten (insbesondere Einsatz der Kerberos Library nicht möglich oder der SAP Applikationsserver läuft nicht unter Windows), gibt es die Möglichkeit, das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen.

Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt (was bei SNC der Fall wäre). 
Andererseits müssen die SAP Applikationsserver auch nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.
 