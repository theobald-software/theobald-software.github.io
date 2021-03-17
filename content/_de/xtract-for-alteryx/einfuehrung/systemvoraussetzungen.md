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
### Alteryx
 	
- Alteryx Designer und Server ab Version 2018 oder höher.

{% include _content/de/einfuehrung/sap-systeme.md %} 

### Installation und Konfiguration auf SAP

| Komponente  | SAP Release       | Anforderung an das SAP System                                                                         |
|------------|:------------------|--------------------------------------------------------------------------------------------------------|
| BAPI       | Rel. above 4.6C   | Keine - **Hinweis:** Nur remote-enabled functions werden unterstützt.      |
| BW Cube    | Rel. above BW 3.1 | Keine spezifischen Anforderungen.          |
| BW Hierarchy  | Rel. above BW 3.1 | Keine spezifischen Anforderungen.            |
| ODP | 	SAP_BASIS >= 730, BW >= 7,3X |	Keine spezifischen Anforderungen. |
| Table      | Rel. above 4.6C    | Installation eines Funktionsbausteins ist empfohlen.| 

Weitere Informationen bzgl. der Installation von benutzerdefinierten Funktionsbausteinen finden Sie unter [SAP customizing](../sap-customizing).

{% include _content/de/einfuehrung/sap-authentication-xtract.md %}
{% include _content/de/einfuehrung/sap-misc.md %}
{% include _content/de/einfuehrung/operating-systems.md %}
{% include _content/de/einfuehrung/xu-req-verschiedenes.md %}
