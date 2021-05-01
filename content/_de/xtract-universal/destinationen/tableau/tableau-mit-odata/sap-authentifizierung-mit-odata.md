---
ref: xu-tableau-with-odata-02
layout: page
title: SAP-Authentifizierung mit OData
description: SAP-Authentifizierung mit OData
product: xtract-universal
parent: tableau-mit-odata
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sap-authentifizierung-mit-odata
---

OData-Extraktionen können im Kontext des SAP-Nutzers durch Eingabe der SAP-Anmeldedaten ausgeführt werden. 

Unter General Settings -> <br>
Dazu öffnen Sie die *General Settings* der Extraktion und wählen Sie 
- im Tab Misc. die Option *Disable Buffer*, und
- im Tab *Security* die Option *Require SAP Credentials*. 

![Require-SAP-Credentials](/img/content/Require-SAP-Credentials.png){:class="img-responsive"}

Im OData-VerbindungsFenster muss nun der Tableau-Benutzer seine SAP-Anmeldedaten (Benutername und Passwort) eingeben. Die Daten werden nun aus SAP mit diesen Anmeldedaten extrahiert. 

![Tableau-Odata-Credentials](/img/content/Tableau-Odata-Credentials.png){:class="img-responsive"}

Ungültige SAP-Anmeldedaten führen zur folgenden Fehlermeldung. 

![Tableau-SAP-Credentials-Error](/img/content/Tableau-SAP-Credentials-Error.png){:class="img-responsive"}
