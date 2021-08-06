---
ref: erpconnect-02
layout: page
title: SAP-Verbindung
description: SAP-Verbindung
product: erpconnect
parent: erpconnect
childidentifier: sap-verbindung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-verbindung
---

Um Aktionen wie Design von ETL-Paketen, Extraktion von Metadaten, Datenvorschau und -bereitstellung durchzuführen, ist eine Verbindung zu Ihrem SAP-System erforderlich.

Für die Anmeldung an einem SAP-System müssen Sie folgende Daten angeben: 
- Mandant
- Sprache
- Authentifizierung
- SAP-Zielsystem
- SAP-Router

Darüber hinaus können Sie wählen, ob Sie die klassiche (Standard) oder die Netweaver RFC-Bibliothek (API) verwenden. 

### RFC-Bibliothek (API)
Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem SAP-System von einem externen System, das als Client oder Server mit dem SAP-System kommunizieren kann. 
Die RFC API existiert in zwei unterschiedlichen Versionen: 
- Klassiche RFC-API (klassische RFC-Bibliothek).
- Netweaver-RFC-API (Netweaver RFC-Bibliothek). 

Für weitere Informationen zu den RFC-Bibliotheken, siehe [RFC API: Classical & NetWeaver](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm).

{: .box-note }
**Hinweis:** Die Netweaver-RFC-Option unterstützt kein DeltQ und kein OHS.

*****
In den folgenden Abschnitten finden Sie Details zur Erstellung einer SAP-Verbindung:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}