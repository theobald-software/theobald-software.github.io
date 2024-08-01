---
ref: xfa-introduction-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: xtract-for-alteryx
parent: einfuehrung
permalink: /:collection/:path
weight: 1
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract for Alteryx.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract for Alteryx HelpCenter](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

### Alteryx
 	
- Alteryx Designer und Server ab Version 2018 oder höher.

{% include _content/de/einfuehrung/sap-systeme.md %} 

### Installation und Konfiguration auf SAP

| Komponente  | SAP Release       | Anforderung an das SAP System                                                                         |
|------------|:------------------|--------------------------------------------------------------------------------------------------------|
| Xtract BAPI       | Rel. above 4.6C   | Keine - **Hinweis:** Nur remote-enabled functions werden unterstützt.      |
| Xtract Cube    | Rel. above BW 3.1 | Keine spezifischen Anforderungen.          |
| Xtract Hierarchy  | Rel. above BW 3.1 | Keine spezifischen Anforderungen.            |
| Xtract ODP | 	SAP_BASIS >= 730, BW >= 7,3X |	Keine spezifischen Anforderungen. |
| Xtract Report | 	Rel. above 4.6C   | Installation eines Funktionsbausteins ist notwendig.     |
| Xtract Table      | Rel. above 4.6C    | Installation eines Funktionsbausteins ist empfohlen.| 

Weitere Informationen bzgl. der Installation von benutzerdefinierten Funktionsbausteinen finden Sie unter [SAP customizing](../sap-customizing).

{% include _content/de/einfuehrung/sap-authentication-xtract.md %}
{% include _content/de/einfuehrung/sap-misc.md %}
{% include _content/de/einfuehrung/operating-systems.md %}
{% include _content/de/einfuehrung/xu-req-verschiedenes.md %}
