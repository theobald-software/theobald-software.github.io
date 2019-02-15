---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: fortgeschrittene-techniken
childidentifier: SAP-Single-Sign-On
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: 
---

**Anwendungsfall**

BI Client Tools wie z.B. Power BI, Power Pivot, alteryx, etc. können Extraktionen in Xtract Universal anstoßen. Die extrahierten Daten werden von Xtract Universal direkt in diese Tools geladen.
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Credentials des (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion in XU angestossen wurde. Das spielt z.B. insbesondere beim Zugriff auf BW/BEx Queries eine Rolle.

Das heisst, die Windows-Credentials dieses Benutzers müssen via Xtract Universal an SAP weitergeleitet werden. Auf dem Weg dorthin oder auf SAP-Seite besteht ein Mapping zwischen Windows-Benutzer und dessen SAP-Credentials.

Dieses Szenario, Single Sign On (SSO), lässt sich mit Xtract Universal abbilden. Es erfordert allerdings etwas Konfigurationsaufwand an unterschiedlichen Stellen in der Systemlandschaft.

Prinzipiell lässt sich SSO mit Xtract Universal über zwei unterschiedliche Verfahren darstellen:

1. Mit Secure Network Communication (SNC) und SAPs Kerberos Wrapper Library
2. Mittels SAP Logon Ticket



**SSO in Xtract Universal und SNC mit Kerberos**

Für die Nutzung dieses Verfahrens **müssen** folgende Voraussetzungen zwingend erfüllt sein:

1. Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
2. Der BI Client (der die Extraktion in  Xtract Universal aufruft) läuft unter Windows.
3. Als SNC-Lösung wird SAPs Kerberos Wrapper Library (gsskrb5) verwendet.


*Hintergrundinformationen*
Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - also z.B. SAPs Common Crypto Lib **oder** gsskrb5, aber nicht beides gleichzeitig.
Das beschriebene Verfahren funktioniert ausschließlich mit der gsskrb5. 

Damit das Weiterreichen der Windows Credentials durch Xtract Universal funktioniert, muss die SNC-Lösung das unterstützen. Da Active Directory auf Kerberos basiert, muss dafür das "Double Hop"-Problem gelöst werden: Kerberos erlaubt aus Sicherheitsgründen das Weitergeben von Credentials nicht. Es gibt aber Kerberos-Erweiterungen von Microsoft (S4U-Extensions), die das ermöglichen. Diese Erweiterungen sind auch als "Constrained Delegation" bekannt.

Die Common Crypto Library von SAP unterstützt das lt. Aussage des SAP Support explizit nicht. Die Kerberos Wrapper Library (gsskrb5) von SAP unterstützt das, und ist bei mehreren unserer Kunden im Einsatz. 
Es gibt eventuell auch Third-Party-Anbieter von SNC-Lösungen, die das können, damit haben wir keine Erfahrung. Das bedeutet, dass für dieses Szenario die Kerberos Wrapper Library oder eine entsprechende Third-Party-Lösung eingesetzt werden muss.

Da die Kerberos Wrapper Library die Microsoft-Extensions für Kerberos verwendet, um das Double-Hop-Problem zu umgehen, gibt es sie nur für Windows. Sie funktioniert also nur mit SAP-Applikationsservern unter Windows und Clients unter Windows.



**SSO in Xtract Universal via SAP Logon Ticket**

Falls eine der oben genannten Voraussetzungen (insbesondere Einsatz der gsskrb5 nicht möglich oder SAP Applikationsserver läuft nicht unter Windows) nicht gegeben sein sollten, gibt es die Möglichkeit, das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen. Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt (was bei SNC der Fall wäre). Andererseits müssen die Applikationsserver auch nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.
 