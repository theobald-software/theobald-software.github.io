
Der folgende Abschnitt befasst sich mit dem Datenmodellierungskonzept Core Data Service (CDS). 
Datenmodelle auf Basis von CDS dienen als zentrale Definitionen, die in vielen verschiedenen Bereichen, wie z.B. transaktionalen und analytischen Anwendungen, eingesetzt werden können.  

CDS wird mit einer SQL-basierten Datendefinitionssprache (DDL) definiert. 
DLL nutzt die Standard-SQL mit einigen zusätzlichen Konzepten, wie z.B. Assoziationen zum Definieren der Beziehungen zwischen den CDS Views, und Annotationen, zum Steuern der domänenspezifische Verwendung von CDS-Artefakten. 

### Verfügbare CDS
Es stehen zwei Arten von CDS zur Verfügung:
- HANA CDS (definiert in der XS-Engine) 
- ABAP CDS


Für jede im DDL-Quellcode definierte ABAP-CDS-Entität wird ein SQL-View im ABAP Dictionary generiert. 
Wie bei Views, die mit Hilfe von Dictionary-Werkzeugen (Transaktion SE11) erstellt wurden, können ABAP-CDS-Entitäten in ABAP über Open SQL-Anweisungen angesprochen werden. 

CDS ist wichtig für die SAP-Anwendungsentwicklung. Zum Beispiel verwendet S/4HANA CDS, um sowohl zentrale Transaktionsfunktionen als auch analytische Inhalte für die Erstellung von Reports bereitzustellen.. 
In BW/4 HANA können ABAP-basierte CDS-Views zur Datenextraktion verwendet werden.  

Zwei mögliche Anwendungsfälle für CDS sind:
- Direkter Zugriff auf eine CDS-Sicht aus BW/4 HANA 
- Delta-Extraktion aus einer CDS-Sicht in S/4 HANA nach BW

CDS Views unterstützen die Extraktion im Full- und Delta-Modus. 

### **Ersatz von BW-Extraktoren durch CDS Views in S/4 HANA** 
Meistens können traditionelle BW-Extraktoren verwendet werden, um Daten aus einem S/4 HANA-System zu extrahieren. 
Aufgrund von Vereinfachungen im S/4 HANA-System sind einige Extraktoren abgekündigt oder können nicht mehr in gleicher Weise verwendet werden. 
Um die abgekündigte und veraltete Extraktoren zu verwenden, kann SAP CDS-Views liefern, die extraktionsrelevant sind (über die analytischen Annotationen).

### ABAP CDS Views verwenden 
Wenn Sie nach ABAP CDS Views [suchen](./odp-functions-ov#operational-data-provider), achten Sie darauf den richtigen Kontext auszuwählen. 

![ODP ABAP CDS View](/img/content/odp/odp-component-cds-costcenter-01.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option **Delta Update** in der ODP-Komponente verfügbar. 

![ODP ABAP CDS View Preview](/img/content/odp/odp-component-cds-costcenter-02-preview.png){:class="img-responsive"}

Klicken Sie auf **[Load live preview]**, um eine Echtzeitvorschau anzuzeigen, ohne dabei eine Extraktion auszuführen..