---
ref: xu-advanced-techniques-07
layout: page
title: SSO with SAP Logon Ticket
description: SSO with SAP Logon Ticket
product: xtract-universal
parent: SAP-Single-Sign-On
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: 
---


A  Single-Sign-On (SSO) connection to SAP can be set up using SAP Logon Ticket. This scenario would look like this:

### Architecture
Es gibt eine AS Java Instanz, welche für SPNEGO/Kerberos Authentisierung eingerichtet ist. Auf dieser Instanz besteht ein Mapping von Windows AD-Benutzern auf SAP-Benutzer (== Ticket Issuer).
Die AS ABAP Instanzen (mit denen sich Xtract Universal verbindet) vertrauen den SAP Logon Tickets dieser AS Java Instanz.

### Process
1. Beim Ausführen der Extraktion authentisiert sich der Benutzer gegenüber dem XU Server per Kerberos/SPNEGO.
2. XU Server impersoniert den Aufrufer.
3. XU Server authentisiert sich als der Aufrufer per SPNEGO/Kerberos gegenüber AS Java.
4. AS Java bildet Windows Benutzer auf SAP Benutzer ab und stellt ein SAP Logon Ticket für diesen SAP Benutzer aus. Liefert das Logon Ticket im MYSAPSSO2 cookie.
5. XU Server holt SAP Logon Ticket aus Cookie, meldet sich damit am AS ABAP an und führt die Extraktion aus.

### Further information (SAP Help)
* [Kerberos and SAP NetWeaver AS for Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
* [Using Logon Tickets with AS ABAP](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
* [Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm)
