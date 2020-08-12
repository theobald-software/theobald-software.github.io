### Extraktoren - Extractors
Xrtact ODP wird dazu verwendet Daten aus den Business Content DataSources (Extraktoren) zu extrahieren. Die Mehrzahl der DataSources, inklusive generischer (benutzerdefinierter) DataSources, kann für ODP freigegeben werden. 

Xtract ODP ändert die Implementierung von Anwendungsextraktoren nicht, alle Funktionen und Eigenschaften bleiben unverändert. 

Ein Extraktor (in ERP oder S/4 HANA) ist ein gekapseltes Business-Objekt, das mehrere Quelltabellen im Quellsystem repräsentiert und Geschäftslogik bringt. Es ist wirklich eine Stärke des SAP-Quellsystems, weil es sehr einfach ermöglicht, die Geschäftslogik zu extrahieren. 

Extraktoren können die folgenden Datentypen bereitstellen:
- Transaktionsdaten
- Stammdaten
- Textdaten
- Hierarchiedaten

Für Stamm- und Bewegungsdaten stehen standardmäßig Deltaextraktionsmethoden zur Verfügung. 

### Extraktoren verwenden

Wenn Sie nach BW InfoProvidern [suchen](./odp-funktionsuebersicht#operational-data-provider), stellen Sie sicher, dass Sie den richtigen Kontext auswählen. 
![ODP SAPI Search](/img/content/odp/odp-datasource-sapi.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Wenn Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option **Delta Update** in der ODP-Komponente verfügbar. 

![ODP SAPI Search](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}

Klicken Sie auf **[Load live preview]**, um eine Echtzeitvorschau anzuzeigen, ohne dabei eine Extraktion auszuführen.