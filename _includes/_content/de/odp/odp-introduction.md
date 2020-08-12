
### Technische Voraussetzungen

Es gibt einige Voraussetzungen, die auf der SAP-Seite erfüllt sein müssen, wenn ODP verwendet wird. SAP hat eine Reihe von Hinweisen veröffentlicht, die bei der Verwendung der Xtract ODP-Komponente gelten:
- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427/D)
- [2232584 - Freigabe von SAP Extraktoren für ODP Replikation (ODP-SAPI)](https://launchpad.support.sap.com/#/notes/2232584/D)
- [Freigabe von DataSources für das 'ODP data replication API'](https://launchpad.support.sap.com/#/notes/1560241/D)

### Was ist Xtract ODP?


Die ODP-Komponente kann verwendet werden, um Daten über das SAP Operational Data Provisioning (ODP) Framework zu extrahieren. 

ODP ist ein Framework in ABAP-basierten SAP-Systemen für den Datentransfer zwischen verschiedenen Systemen.<br> 
ODP stellt eine technische Infrastruktur für die Datenextraktion und -replikation aus verschiedenen SAP (ABAP)-Systemen zur Verfügung, z.B.:
- ECC 
- S/4 HANA
- BW 
- BW/4 HANA

Die Xtract-ODP-Komponente, welche die Daten benötigt, agiert als sogenannter Subscriber (Consumer). Die ODP-Komponente abonniert einen Data-Provider, z.B. einen SAP-Extraktor oder einen CDS-View.
 

Operational Data Provisioning (ODP) unterstützt auch Delta-Mechanismen (inkrementelles Laden), z.B. aus den Extraktoren, ABAP CDS Views und aDSO -Objekten (s.u.).
Mit SAP BW/4HANA wird Operational Data Provisioning (ODP) zur zentralen Infrastruktur für die Datenextraktion und -replikation aus SAP-(ABAP)-Anwendungen in ein SAP BW/4 HANA Data Warehouse. 
<br/>

ODP bietet Datentransfer von den folgenden Providern (auch Provider Context genannt):
- ABAP Core Data Services (CDS) Views 
- BW und BW/4HANA InfoProviders
- SAP HANA Informationsviews in ABAP-basierten SAP-Systemen
- DataSources und Extraktoren 

{: .box-note }

**Hinweis:** Abhängig vom angeschlossenen SAP-Quellsystem sind verschiedene Provider-Kontexte (Provider-Contexts) verfügbar.

Das nachfolgende Beispiel zeigt die verfügbaren ODP-Kontexte mit einem angeschlossenen BW /4 HANA als SAP-Quellsystem.
Ein BW- oder ein ECC-System beinhalten weniger Optionen in der Liste mit den Provider-Kontexten.

![ODP Provider Kontext aus dem BW/4 HANA System](/img/content/odp/odp-component-context-bw.png){:class="img-responsive"}


#### SAP Quellobjekte und die geeigneten ODP-Kontexte
 
ODP-Kontext | SAP-Quellobjekte |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](./odp-abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](./odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query als InfoProvider<br> **BW Systeme:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
HANA Information Views [[HANA](./odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extraktoren [[SAPI](./odp-extractors)] | - DataSources und Extraktoren |

Geeignete ODP-Kontexte können innerhalb des [ODP-Lookup-Fensters ](./odp-extractors#extraktorsuche) ausgewählt werden.

###  Xtract ODP - Funktionsübersicht
Das Fenster "Define data source for SAP ODP" besteht aus einigen Unterabschnitten:

- [Operational Data Provider](./odp-functions-ov#operational-data-provider) - zeigt den Namen des Quellobjekts an
- [Additional info](./odp-functions-ov#additional-info) - zeigt den ODP-Provider-Kontext und den Datentyp des Quellobjekts an
- [Update mode](./odp-functions-ov#update-mode) - definiert das Load-Verfahren - Full-Load oder Deltaverarbeitung.
- [Fields](./odp-functions-ov#filtering---dynamic-setting-of-the-selection-filters) - ermöglicht die Auswahl und Einstellung der Filteroptionen für [Extraktoren](./odp-extractors)
- Preview - Echtzeit-Vorschau der Extraktionsdaten

#### Schaltflächen
- **[[Show active subscriptions ](./odp-functions-ov#subscriptions)]** - Schaltfläche zum Anzeigen der Details zum Abonnentenprozess.
- **[[Edit parameters](./odp-functions-ov#edit-parameters-)]** - Schaltfläche zum Definieren der  Laufzeitparameter, die als Platzhalter zum Auwählen der Daten verwendet werden können.
- **[Load Live Preview]** - Schaltfläche zum Anzeigen der Echtzeitvorschau der zu extrahierten Daten ohne Ausführung einer Extraktion. 

****
#### Weiterführende Links
- [SAP community Wiki](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646)





