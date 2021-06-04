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
1. Wenn Sie nach BW InfoProvidern [suchen](./odp-define), stellen Sie sicher, dass Sie den richtigen Kontext auswählen. 
![ODP SAPI Search](/img/content/odp/odp-datasource-sapi.png){:class="img-responsive"}
2. Wenn Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option **Delta Update** in der ODP-Komponente verfügbar. 
3. Wenn es sich bei der Datenquelle um eine Hierarchie handelt, werden zusätzliche Einstellungen angezeigt, siehe [Hierarchien](#hierarchies).
4. Klicken Sie auf **[Load live preview]**, um eine Echtzeitvorschau anzuzeigen, ohne dabei eine Extraktion auszuführen.