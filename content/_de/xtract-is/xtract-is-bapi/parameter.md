---
ref: xi-bapi-02
layout: page
title: Parametrisierung
description: Parameter
product: xtract-is
parent: xtract-is-bapi
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=skalare-parameter
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

{% include _content/de/bapi/parameters.md %}


### Custom Properties (Benutzerdefinierte Eigenschaften)

Die *Benutzerdefinierten Eigenschaften (Custom Properties)* definieren die für die Komponente eindeutigen Eigenschaften. Bei der Parametrierung der Komponente mittels SSIS-Variablen werden die *Benutzerdefinierten Eigenschaften (Custom Properties)* überschrieben.

Die *Benutzerdefinierten Eigenschaften (Custom Properties)* der Xtract BAPI-Komponente werden im Fenster „Eigenschaften“ der Komponente angezeigt.
![bapi-properties.png](/img/content/xis/bapi-properties.png){:class="img-responsive"}

**Transaction Commit**<br>
Setzen Sie diese Option auf *true*, um den Funktionsbaustein BAPI_TRANSACTION_COMMIT nach der Verarbeitung des ausgewählten Funktionsbausteins/BAPI aufzurufen.
Einige SAP-Funktionsmodule erfordern diese Commit-Funktion, um Daten in der Datenbank erfolgreich zu aktualisieren, z. B. BAI_PO_CREATE.

*****
#### Weiterführende Links
- [How to Post Data in SAP with Xtract BAPI](https://kb.theobald-software.com/bapis/xtract-is-how-to-post-data-in-sap)
- [Uploading CATS data by using Xtract IS BAPI](https://kb.theobald-software.com/bapis/xtract-is-uploading-cats-data)

