---
ref: xtract-for-alteryx-06
layout: page
title: Xtract BAPI
description: BAPIs und Funktionsbausteine
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 6
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract for Alteryx.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract for Alteryx HelpCenter](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

Der folgende Abschnitt beschreibt die Anwendung der Xtract BAPI-Komponente in Xtract for Alteryx.<br> 
Die Xtract BAPI-Komponente führt via RFC-Berbindung SAP BAPIs oder Funktionsbausteine aus.


{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die BAPI Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: BAPI](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bapi).

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### Xtract BAPI-Komponente verwenden
{% include _content/de/alteryx-component-intro.md %}

### Eingabe-und Ausgabeanker des Xtract BAPI

Das Xtract BAPI verfügt über folgende Ein-und Ausgabemöglichkeiten:
- Eingabeanker "I" - Eingabe für Laufzeitparameter (1).
- Eingabeanker "P" - Eingabe für Tabellen (2).
- Ausgabeanker "1" bis "5" - benutzerdefinierte Ausgabe (3).
- Ausgabeanker "E" - Ausgabe für Export-Parameter (4).

![bapi-input](/img/content/xfa/bapi-input.png){:class="img-responsive" }

****

Weitere Informationen zum Arbeiten mit der Xtract BAPI Komponente finden Sie in den folgenden Unterabschnitten.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
