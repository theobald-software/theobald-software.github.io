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

BI Client Tools wie z.B. Power BI, Power Pivot, Alteryx, etc. können Extraktionen in Xtract-Produkten (z.B. Xtract Universal oder Board Connector) starten. 
Die extrahierten Daten werden von Xtract-Produkten direkt in die genannten Tools geladen.
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Anmeldeinformationen desjenigen (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion angestoßen wurde. 
Dadurch greifen die SAP-Berechtigungen des ausführenden Benutzers, was z.B. bei der Extraktion von BW/BEx Queries wichtig ist.

Die Windows-Anmeldeinformationen des Benutzers müssen über das Xtract-Produkt an SAP weitergeleitet werden. 
Auf dem Weg zu SAP oder auf SAP-Seite wird ein Mapping zwischen Windows-Benutzer und dessen SAP-Anmeldeinformationen durchgeführt.

Single Sign-On (SSO) mit Xtract-Produkten lässt sich über unterschiedliche Verfahren realisieren:

- [Secure Network Communication (SNC) mit Client-Zertifikaten](https://kb.theobald-software.com/sap-connection/sso-with-client-certificates)
- [Secure Network Communication (SNC) mit PSE und External ID](https://kb.theobald-software.com/sap-connection/sso-with-external-id)
- [Secure Network Communication (SNC) mit SAPs Kerberos Wrapper Library](https://kb.theobald-software.com/sap-connection/sso-with-kerberos-snc) (veraltet)
- [SAP Logon Ticket](https://kb.theobald-software.com/sap-connection/sso-with-logon-ticket)

Die Methode wird in den SAP Verbindungseinstellungen ausgewählt, siehe [Eine SAP-Verbindung erstellen - Authentifizierung](../erste-schritte/sap-verbindungen-anlegen#authentication).

### Was ist SNC?
Secure Network Connection (SNC) ermöglicht die Authentisierung und Transportverschlüsselung zwischen SAP Systemen untereinander, sowie zwischen SAP und Third-Party-Systemen wie Xtract Universal und Board Connector.
Für mehr Informationen zu SNC, siehe [SAP Dokumentation: Secure Network Communications](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/LATEST/de-DE/e656f466e99a11d1a5b00000e835363f.html).
