Die ODP-Komponente kann verwendet werden, um Daten über das SAP Operational Data Provisioning (ODP) Framework zu extrahieren. 

ODP ist ein Framework in SAP-ABAP-Systemen für den Datentransfer zwischen Systemen. 
Es stellt eine technische Infrastruktur für die Datenextraktion und -replikation aus verschiedenen SAP (ABAP)-Systemen zur Verfügung, z.B. 
- ECC 
- S/4 HANA
- BW und 
- BW/4 HANA. 

Es ermöglicht verschiedenen Verbraucher  (ODP Consumer) Daten zu abonnieren und verschiedenen Datenanbietern (ODP Provider) Daten zu veröffentlichen. Daten können an verschiedene ODP-Verbraucher gesendet werden (auch mehrere in parallel).  

Das Operational data provisioning unterstützt auch Delta-Mechanismen (inkrementelles Laden). 
Mit SAP BW/4HANA wird Operational Data Provisioning (ODP) zur zentralen Infrastruktur für die Datenextraktion und -replikation aus SAP ABAP-Anwendungen in ein SAP BW/4 HANA Data Warehouse. 
<br/>
![ODP-Komponente](/img/Inhalt/Andip/odp/odp-Komponente-general.png){:class="img-responsive"}
<br/>
ODP bietet Datentransfer von den folgenden Providern (auch Provider Context genannt): 
- SAP DataSources (Extraktoren) 
- ABAP CDS Views 
- SAP BW und SAP BW/4 HANA InfoProvider
- SAP HANA Informationsviews in SAP ABAP basierten Systemen 

Abhängig vom angeschlossenen SAP-Quellsystem sehen Sie den verfügbaren Provider-Kontext. 
Nachfolgend finden Sie den in unserem Demo ECC-System verfügbaren ODP-Kontext. 
<br/>
![ODP Provider-Kontext aus einem ERP-System](/img/content/odp/odp/odp-component-context-erp.png){:class="img-responsive"}

Nachfolgend finden Sie den in unserem Demo BW/4 HANA-System verfügbaren ODP-Kontext. 
<br/>
![ODP Provider-Kontext aus einem BW/4 HANA-System](/img/content/odp/odp/odp-component-context-bw.png){:class="img-responsive"}

