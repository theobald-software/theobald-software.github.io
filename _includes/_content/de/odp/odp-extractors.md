### Extraktoren
Xrtact ODP wird dazu verwendet Daten aus den Business Content DataSources (Extraktoren) zu extrahieren. Die Mehrzahl der DataSources, inklusive generischer (benutzerdefinierter) DataSources, kann für ODP freigegeben werden. 

Xtract ODP ändert die Implementierung von Anwendungs-Extraktoren nicht, alle Funktionen und Eigenschaften bleiben unverändert. 

Ein Extraktor (in ERP oder S/4 HANA) ist ein gekapseltes Business-Objekt, das mehrere Quelltabellen im Quellsystem repräsentiert und Geschäftslogik bringt. Es ist wirklich eine Stärke des SAP-Quellsystems, weil es sehr einfach ermöglicht, die Geschäftslogik zu extrahieren. 

### Verfügbare Extraktoren
- Transaktionsdaten
- Stammdaten
- Textdaten
- Hierarchiedaten

Für Stamm- und Bewegungsdaten stehen standardmäßig Deltaextraktionsmethoden zur Verfügung. 

### Extraktoren verwenden

Worauf Sie bei der Verwendung von Extraktoren achten müssen: 

- Um DataSources verwenden zu können, müssen sie in SAP aktiviert sein, siehe [Set Up and Activate DataSources](https://help.sap.com/viewer/7a60944343e543a1ab99e9b2904dab09/CLOUD/en-US/e5d447257a95416190d29638a64a5dfa.html).
- Wenn Sie nach BW InfoProvidern suchen, wählen Sie den richtigen Kontext aus, siehe [Ein Objekt (Data Object) finden](./odp-define). 
![ODP SAPI Search](/img/content/odp/odp-datasource-sapi.png){:class="img-responsive"}
- Wenn Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option **Delta Update** in der ODP-Komponente verfügbar. 
- Wenn es sich bei der Datenquelle um eine Hierarchie handelt, werden zusätzliche Einstellungen angezeigt, siehe [Hierarchien](#hierarchies).
