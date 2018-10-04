---
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

Sie benötigen ein PowerBI-Konto und eine PowerBI Client ID, welche Sie bei der Registrierung einer Client-App erhalten. <br>
Auf dem lokalen Rechner müssen Sie nichts zusätzliches installieren.

Sie registrieren eine Client-App, um Xtract Universal den Zugriff auf Power BI zu ermöglichen. Auf diese Weise können Sie eine Identität für Ihre Anwendung erstellen und Berechtigungen für Power BI-Ressourcen angeben. 

Folgen Sie den Anweisungen auf der Seite [Registrieren einer Client-App](https://dev.powerbi.com/apps). <br>
Wichtig ist der Abschnitt *Registrieren einer Client-App mit dem Power BI-App-Registrierungstool*.<br>
Wenn Sie eine Client-App registrieren, erhalten Sie eine Client-ID, welche von Xtract Universal für den Zugriff auf PowerBI verwendet wid.

Bei der Registrierung können Sie 
einen beliebigen ***App-Name*** setzen, z.B. Xtract Universal. <br>
Der **App-Typ** muss Native *App sein*. <br>
Sie können eine *beliebige valide Umleitungs-URL* (**redirect URL**) angeben, z.B. www.theobald-software.com . 

Die folgenden Zugriffsberechtigungen (**access permissions**) sind nötig: 
- Dataset Read und 
- Read and Write all Datasets. 

Nach der Registrierung wird die Client-ID im entsprechenden Feld angezeigt. <br>
Kopieren Sie sich die Client-ID und die Umleitungs-URL, da wir diese Angaben später benötigen. 