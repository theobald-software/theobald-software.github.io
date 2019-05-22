SAP hat ein neues Konzept für die Datenmodellierung namens Core Data Service (CDS) eingeführt. Datenmodelle auf Basis von CDS dienen als zentrale Definitionen, die in vielen verschiedenen Bereichen, wie z.B. transaktionalen und analytischen Anwendungen, eingesetzt werden können.  

CDS wird mit einer SQL-basierten Datendefinitionssprache (DDL) definiert, die Standard-SQL mit einigen zusätzlichen Konzepten nutzt, wie z.B. Assoziationen, die die Beziehungen zwischen CDS-Ansichten definieren, und Annotationen, die die domänenspezifische Verwendung von CDS-Artefakten steuern. Es gibt zwei Arten von CDS, das HANA CDS (definiert in der XS-Engine) und das ABAP CDS. 

Für jede im DDL-Quellcode definierte ABAP-CDS-Entität wird im ABAP Dictionary eine SQL-Sicht generiert. Wie bei Views, die mit Hilfe von Dictionary-Werkzeugen (Transaktion SE11) erstellt wurden, können ABAP-CDS-Entitäten in ABAP über Open SQL-Anweisungen angesprochen werden. 

CDS ist bei SAP zum Eckpfeiler der Anwendungsentwicklung geworden. Ein wichtiges Beispiel dafür ist S/4 HANA, das mit CDS sowohl die wichtigsten Transaktionsfunktionen als auch analytische Inhalte für das Reporting bereitstellt. In BW/4 HANA können ABAP-basierte CDS-Views zur Datenextraktion verwendet werden.  

Zwei mögliche Anwendungsfälle sind:
- Direkter Zugriff auf eine CDS-Sicht aus BW/4 HANA und 
- Deltaextraktion aus einer CDS-Sicht in S/4 HANA nach BW

CDS Views unterstützen die Full- und Delta-Extraktion. 

**Ersatz von BW-Extraktoren durch CDS-Sichten in S/4 HANA**
Meistens können traditionelle BW-Extraktoren verwendet werden, um Daten aus einem S/4 HANA-System zu extrahieren. Aufgrund von Vereinfachungen im S/4 HANA-System sind einige Extraktoren veraltet oder können nicht mehr in gleicher Weise verwendet werden. Für diese Extraktoren kann SAP CDS-Views liefern, die extraktionsrelevant sind (über die analytischen Annotationen).

Wählen Sie den Kontext und Typ aus, um nach einer ABAP-CDS-Sicht zu suchen. <br/>
![ODP ABAP CDS View](/img/content/odp/odp/odp-component-cds-costcenter-01.png){:class="img-responsive"}
<br/>
Klicken Sie auf OK, dann sehen Sie die verfügbaren Felder und die Beschreibung. Klicken Sie auf Live-Vorschau laden, um die Datenvorschau zu sehen.
<br/>
![ODP ABAP CDS View Vorschau](/img/content/odp/odp/odp-component-cds-costcenter-02-preview.png){:class="img-responsive"}
<br/>
Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 