
#### Skript-Ausdrücke als dynamische Dateinamen

Skript-Ausdrücke können für die Generierung eines dynamischen Dateinamens verwendet werden.
Dadurch kann ein Name generiert werden, der sich aus den Eigenschaften einer Extraktion zusammensetzt, z.B. Extraktionsname, SAP-Quellobjekt.
Unterstützt werden Skript-Ausdrücke, die auf .NET basieren, sowie folgende XU-spezifische Skript-Ausdrücke:

| Eingabe                                                  | Beschreibung|
|:--------------------------------------------------------|:-----------|
|```#{Source.Name}# ```|  Name der SAP Quelle. |
|```#{Extraction.ExtractionName}# ```| Name der Extraktion. |
|```#{Extraction.Type}# ```|  Extraktionstyp (*Table*, *ODP*, *DeltaQ*, etc.). |
|```#{Extraction.SapObjectName}# ```|  Name des SAP Objekts, von dem die Extraktion Daten extrahiert. |
|```#{Extraction.Timestamp}# ```|  Zeitstempel der Extraktion.  |
|```#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}# ```  | Entfernt einen führenden Schrägstrich, z.B. wird aus /BIO/TMATERIAL dann BIO/TMATERIAL, damit kein leeres Verzeichnis angelegt wird.
|```#{Extraction.SapObjectName.Replace('/', '_')}#``` | Entfernt alle Schrägstriche eines SAP Objekts, z.B. wird aus /BIO/TMATERIAL dann _BIO_TMATERIAL. Dadurch wird verhindert, dass die Schrägstriche innerhalb des Namens des SAP Objekts, nicht als Verzeichnistrenner interpretiert werden.         |
|```#{Extraction.Context}# ```|  Nur für ODP Extraktionen: Kontext des ODP Objekts (*SAPI*, *ABAP_CDS*, etc.). |
|```#{Extraction.Fields["[NameSelectionFiels]"].Selections[0].Value}#```| Nur für ODP Extraktionen: Eingabewert einer definierten Selektion / eines Filter.|  

Für mehr Informationen zu Skript-Ausdrücken, siehe [Skript-Ausdrücke](../fortgeschrittene-techniken/script-ausdruecke).

