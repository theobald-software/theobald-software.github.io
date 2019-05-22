Das Operational Data Provisioning Framework ermöglicht es Ihnen, Daten aus den Infoprovidern in Ihren Quellsystemen BW und BW/4 HANA zu extrahieren. 
Die verfügbaren InfoProvider-Typen sind abhängig von Ihrem BW und BW/4-HANA Quellsystem.

Die BW∕4 HANA Systeme bieten die folgenden InfoProvider über den ODP BW-Kontext an:
- DataStore-Objekte (erweitert) (mit Delta-Extraktion)
- CompositeProvider - Objekttyp HCPR (vollständige Extraktion)
- InfoObjects
-- Stammdaten
-- Texte
-- Hierarchien
- Query als InfoProvider

Zusätzlich bieten BW-Systeme (abhängig von ihrer Version) die folgenden InfoProvider über den ODP BW-Kontext an:
- InfoCubes (mit Deltaextraktion)
- Semantisch partitionierte Objekte
- HybridProvider
- MultiProvider
- InfoSets


Wählen Sie den Kontext und Typ aus, um nach einem BW-InfoProvider zu suchen. <br/>
![ODP BW Suche](/img/inhaltlich/odp/odp/odp-Komponente-bw-nwdemo-01.png){:class="img-reagierend"}
<br/>
Klicken Sie auf OK, dann sehen Sie die verfügbaren Felder und die Beschreibung. Klicken Sie auf Live-Vorschau laden, um die Datenvorschau zu sehen.<br/>
![ODP BW Vorschau](/img/Inhalt/odp/odp/odp-Komponente-w-nw-nwdemo-02-preview.png){:class="img-responsive"}

Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 