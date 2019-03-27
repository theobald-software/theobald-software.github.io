---
ref: xu-powerbi-cloud-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-universal
parent: powerbi_cloud
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=powerbi-voraussetzungen
---

Sie benötigen ein Power BI-Konto und eine Power BI Client ID, welche Sie bei der Registrierung einer Client-App erhalten. <br>
Auf dem lokalen Rechner müssen Sie nichts zusätzliches installieren.

Sie registrieren eine Client-App, um Xtract Universal den Zugriff auf Power BI zu ermöglichen. Auf diese Weise können Sie eine Identität für Ihre Anwendung erstellen und Berechtigungen für Power BI-Ressourcen angeben. 

Folgen Sie den Anweisungen auf der Seite [Registrieren einer Client-App](https://dev.powerbi.com/apps). <br>
Wichtig ist der Abschnitt *Registrieren einer Client-App mit dem Power BI-App-Registrierungstool*.<br>
Wenn Sie eine Client-App registrieren, erhalten Sie eine Client-ID, welche von Xtract Universal für den Zugriff auf Power BI verwendet wid.

Bei der Registrierung können Sie: <br>
einen beliebigen **Application Name** setzen, z.B. Xtract Universal. <br>
Der **Application Type** muss vom Typ *Native App* sein. <br>

Die folgenden Zugriffsberechtigungen (**access permissions**) sind nötig: 
- Read all datasets 
- Read and write all datasets. 

Nach der Registrierung wird die Application-ID angezeigt. <br>
Kopieren Sie sich die Application-ID, da wir diese später benötigen. 

Sie benötigen darüberhinaus eine Umleitungs-URI. Diese bekommen Sie über das Azure-Portal, Abschnitt [Registrieren beim Azure-Portal](https://docs.microsoft.com/de-de/power-bi/developer/register-app).