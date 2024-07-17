---
ref: xtract-is-13
layout: page
title: Xtract Report
description: Xtract IS Report
product: xtract-is
parent: xtract-is
childidentifier: report
permalink: /:collection/:path
weight: 13
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=report
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Der folgende Abschnitt beschreibt die Funktion der Xtract Report Komponente.<br>
Die Xtract Report Kompomente ist eine SSIS-Datenquelle, mit deren Hilfe Sie bestehende ABAP-Reports ausführen und die Ausgabe innerhalb der SSIS weiter verarbeiten können.

{: .box-note }
**Hinweis:** Die Report Komponente setzt die Installation des benutzerdefinierten Funktionsbausteins `Z_XTRACT_IS_REMOTE_REPORT` in Ihrem SAP-System voraus. 
Ab `Z_XTRACT_IS_REMOTE_REPORT` Version 1.2 muss der Zugriff auf Reports explizit erteilt werden. Nähere Informationen finden Sie unter [Report Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Report Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract IS](./erste-schritte) beschrieben.<br>

{% include _content/de/abap_reports/report-workflow.md %}

{% include _content/de/abap_reports/support-disclaimer.md %}

### Xtract Report verwenden
{% include _content/de/xis-specific/define-extraction.md %}



---

Weitere Informationen zum Arbeiten mit der Xtract Report Komponente finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}