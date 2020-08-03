### Was ist ODP?

Die ODP-Komponente kann verwendet werden, um Daten über das SAP Operational Data Provisioning (ODP) Framework zu extrahieren. 

ODP ist ein Framework in SAP-ABAP-Systemen für den Datentransfer zwischen Systemen. 
Es stellt eine technische Infrastruktur für die Datenextraktion und -replikation aus verschiedenen SAP (ABAP)-Systemen zur Verfügung, z.B. 
- ECC 
- S/4 HANA
- BW und 
- BW/4 HANA. 

Es ermöglicht verschiedenen Verbraucher  (ODP Consumer) Daten zu abonnieren und verschiedenen Datenanbietern (ODP Provider) Daten zu veröffentlichen. Daten können an verschiedene ODP-Verbraucher gesendet werden (auch mehrere in parallel).  

Das Operational Data Provisioning unterstützt auch Delta-Mechanismen (inkrementelles Laden). 
Mit SAP BW/4HANA wird Operational Data Provisioning (ODP) zur zentralen Infrastruktur für die Datenextraktion und -replikation aus SAP ABAP-Anwendungen in ein SAP BW/4 HANA Data Warehouse. 
<br/>
![ODP-Komponente](/img/content/odp/odp-component-general.png){:class="img-responsive"}
<br/>
ODP bietet Datentransfer von den folgenden Providern (auch Provider Context genannt): 
- SAP DataSources (Extraktoren) 
- ABAP CDS Views 
- SAP BW und SAP BW/4 HANA InfoProvider
- SAP HANA Informationsviews in SAP ABAP basierten Systemen 

Abhängig vom angeschlossenen SAP-Quellsystem sehen Sie den verfügbaren Provider-Kontext. 
Nachfolgend finden Sie den in unserem Demo ECC-System verfügbaren ODP-Kontext. 
<br/>
![ODP Provider-Kontext aus einem ERP-System](/img/content/odp/odp-component-context-erp.png){:class="img-responsive"}
<br/>
Nachfolgend finden Sie den in unserem Demo BW/4 HANA-System verfügbaren ODP-Kontext. 
<br/>
![ODP Provider-Kontext aus einem BW/4 HANA-System](/img/content/odp/odp-component-context-bw.png){:class="img-responsive"}

### Technische Voraussetzungen

Um unsere ODP Komponente nutzen zu können, müssen einige Voraussetzungen auf SAP-Seite gegeben sein. SAP hat eine Reihe von Hinweisen veröffentlicht, die Fragestellungen rund um das Thema ODP behandeln. Diese Hinweise, sofern Sie das SAP System betreffen, aus dem extrahiert wird, gelten idR auch für die Nutzung unserer ODP Komponente.

- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427/D)
- [2232584 - Freigabe von SAP Extraktoren für ODP Replikation (ODP-SAPI)](https://launchpad.support.sap.com/#/notes/2232584/D)
- [1560241 - Freigabe von DataSources für das 'ODP data replication API'](https://launchpad.support.sap.com/#/notes/1560241/D)