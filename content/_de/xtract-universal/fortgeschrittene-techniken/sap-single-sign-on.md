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
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Credentials desjenigen (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion angestoßen wurde. Dadurch greifen die SAP-Berechtigungen des ausführenden Benutzers, was z.B. häufig bei der Extraktion von BW/BEx Queries eine Rolle spielt.

Das heisst, die Windows-Credentials dieses Benutzers müssen via Xtract Universal an SAP weitergeleitet werden. Auf dem Weg dorthin oder auf SAP-Seite besteht ein Mapping zwischen Windows-Benutzer und dessen SAP-Credentials.

Prinzipiell lässt sich dieses *Single Sign On (SSO)* mit Xtract Universal über zwei unterschiedliche Verfahren darstellen:

1. Mit Secure Network Communication (SNC) und SAPs Kerberos Wrapper Library
2. Mittels SAP Logon Ticket


### SSO in Xtract Universal und SNC mit Kerberos Wrapper Library

Für die Nutzung dieses Verfahrens *müssen* folgende Voraussetzungen zwingend erfüllt sein:

1. Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
2. Der BI Client (der die Extraktion in  Xtract Universal aufruft) läuft unter Windows.
3. Als SNC-Lösung wird die SAP Kerberos Wrapper Library (gsskrb5) verwendet.


*Hintergrundinformationen:*

Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - also z.B. SAPs Common Crypto Library **oder** gsskrb5, aber nicht beides gleichzeitig.
Das hier beschriebene Verfahren funktioniert ausschließlich mit der gsskrb5. 

Damit das Weiterreichen der Windows Credentials durch Xtract Universal funktioniert, muss die SNC-Lösung das unterstützen. Da Active Directory auf Kerberos basiert, muss dafür das "Double Hop"-Problem gelöst werden: Kerberos erlaubt aus Sicherheitsgründen das Weitergeben von Credentials nicht. Es gibt aber Kerberos-Erweiterungen von Microsoft (S4U-Extensions), die das ermöglichen. Diese Erweiterungen sind auch als "Constrained Delegation" bekannt.

Die Common Crypto Library von SAP unterstützt das lt. Aussage des SAP Support explizit nicht. Die Kerberos Wrapper Library (gsskrb5) von SAP unterstützt das, und ist bei mehreren unserer Kunden im Einsatz. 
Es gibt eventuell auch Third-Party-Anbieter von SNC-Lösungen, die das können, damit konnten wir allerdings noch keine Erfahrung sammeln. Das bedeutet, dass für dieses Szenario die Kerberos Wrapper Library oder eine entsprechende Third-Party-Lösung eingesetzt werden muss.

Da die Kerberos Wrapper Library die Microsoft-Extensions für Kerberos verwendet, um das Double-Hop-Problem zu umgehen, gibt es sie nur für Windows. Sie funktioniert also nur mit SAP-Applikationsservern unter Windows und Clients unter Windows.

*Weitere Informationen*

[Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))

[Microsoft - Understanding Kerberos Double Hop](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)

[SAP help - Single Sign-On mit Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)




### SSO in Xtract Universal via SAP Logon Ticket

Falls eine der oben genannten Voraussetzungen nicht gegeben sein sollten (insbesondere Einsatz der Kerberos Library nicht möglich oder der SAP Applikationsserver läuft nicht unter Windows), gibt es die Möglichkeit, das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen.

Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt (was bei SNC der Fall wäre). Andererseits müssen die SAP Applikationsserver auch nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.
 