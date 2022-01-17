Die ODP-Komponente wird verwendet, um Daten über das SAP Operational Data Provisioning (ODP) Framework zu extrahieren. 

### Über ODP
ODP ist ein Framework in ABAP-basierten SAP-Systemen für den Datentransfer zwischen verschiedenen Systemen.<br> 
ODP stellt eine technische Infrastruktur für die Datenextraktion und -replikation aus verschiedenen SAP (ABAP)-Systemen zur Verfügung, z.B.:
- ECC 
- S/4 HANA
- BW 
- BW/4 HANA

Die Xtract-ODP-Komponente, welche die Daten benötigt, agiert als sogenannter Subscriber (Consumer). Die ODP-Komponente abonniert einen Data-Provider, z.B. einen SAP-Extraktor oder einen CDS-View.

Operational Data Provisioning (ODP) unterstützt auch Delta-Mechanismen (inkrementelles Laden), z.B. aus den Extraktoren, ABAP CDS Views und aDSO -Objekten (s.u.).
Mit SAP BW/4HANA wird Operational Data Provisioning (ODP) zur zentralen Infrastruktur für die Datenextraktion und -replikation aus SAP-(ABAP)-Anwendungen in ein SAP BW/4 HANA Data Warehouse. 


ODP bietet Datentransfer von den folgenden Providern (auch Provider Context genannt): 
 
ODP-Kontext | SAP-Quellobjekte |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](./odp/odp-abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](./odp/odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query als InfoProvider<br> **BW Systeme:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
HANA Information Views [[HANA](./odp/odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extraktoren [[SAPI](./odp/odp-extractors)] | - DataSources und Extraktoren |

{: .box-note }
**Hinweis:** Abhängig vom angeschlossenen SAP-Quellsystem sind verschiedene Provider-Kontexte (Provider-Contexts) verfügbar.

{: .box-note }
**Hinweis:** Um DataSources finden zu können, müssen sie in SAP aktiviert sein, siehe [Activating DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System).

Für mehr Information über SAP ODP, siehe [SAP Wiki: Operational Data Provisioning (ODP) and Delta Queue (ODQ)](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646).

### Technische Voraussetzungen

Es gibt einige Voraussetzungen, die auf der SAP-Seite erfüllt sein müssen, wenn ODP verwendet wird. SAP hat eine Reihe von Hinweisen veröffentlicht, die bei der Verwendung der Xtract ODP-Komponente gelten:
- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427/D)
- [2232584 - Freigabe von SAP Extraktoren für ODP Replikation (ODP-SAPI)](https://launchpad.support.sap.com/#/notes/2232584/D)
- [1560241 - Freigabe von DataSources für das 'ODP data replication API'](https://launchpad.support.sap.com/#/notes/1560241/D)
- [2196500 - ODP Paketgröße kann nicht auf einen Wert unter 50 MB reduziert](https://launchpad.support.sap.com/#/notes/2196500/D)
- [2191995 - ODQ Paketgröße kann nicht unter 50 MByte reduziert werden](https://launchpad.support.sap.com/#/notes/2191995/D)

