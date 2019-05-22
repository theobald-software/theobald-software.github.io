Mit dem ODP-Framework können Daten aus den Business Content DataSources (Extraktoren) extrahiert werden. 
Bitte beachten Sie, dass die meisten DataSources leicht über ODP freigegeben werden können. 
Gleiches gilt für generische (benutzerdefinierte) DataSources. ODP ändert nichts an der Implementierung von Anwendungsextraktoren, alle Funktionen und Fähigkeiten sind gleich. 

Ein Extraktor (in ERP oder S/4 HANA) ist ein gekapseltes Business-Objekt, das mehrere Quelltabellen im Quellsystem repräsentiert und Geschäftslogik bringt. Es ist wirklich eine Stärke des SAP-Quellsystems, weil es sehr einfach ermöglicht, die Geschäftslogik zu extrahieren. 

Extraktoren können die folgenden Datentypen bereitstellen:
- Transaktionsdaten
- Stammdaten
- Textdaten
- Hierarchiedaten

Für Stamm- und Bewegungsdaten stehen standardmäßig Deltaextraktionsmethoden zur Verfügung. 

Wählen Sie den Kontext und den Typ, um nach einem Extraktor zu suchen. <br/>
![Datenquelle Verkaufsbeleg Positionsdaten (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
<br/>
Live-Vorschau laden zeigt eine Live-Vorschau der Daten <br/>
![Vorschau der Datenquelle](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
<br/>
Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 