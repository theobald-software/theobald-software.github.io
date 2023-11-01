
#### Skript-Ausdrücke als dynamische Ordnerpfade

Skript-Ausdrücke können für die Generierung eines dynamischen Ordnerpfads verwendet werden.
Dadurch kann ein Ordnerpfad generiert werden, der sich aus den Eigenschaften einer Extraktion zusammensetzt, z.B. Extraktionsname, SAP-Quellobjekt.
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
|```#{Extraction.Fields["[NameSelectionFields]"].Selections[0].Value}#```| Nur für ODP Extraktionen: Eingabewert einer definierten Selektion / eines Filter.|  
|```#{Odp.UpdateMode}#```| Nur für ODP Extraktionen: Load-Verfahren (*Delta*, *Full*, *Repeat*) der Extraktion.| 
|```#{TableExtraction.WhereClause}#``` | Nur für Table Extraktionen: WHERE-Bedingung der Extraktion.  |
|```#{Extraction.Fields["[0D_NW_CODE]"].Selections[0].Value}#``` | Nur für BWCube Extraktionen (MDX Modus): Eingabewert einer definierten Selektion.  |
|```#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].LowerValue}#``` | Nur für BWCube Extraktionen (MDX Modus): Niedriger Eingabewert eines definierten Selektionsbereichs.  |
|```#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].UpperValue}#``` | Nur für BWCube Extraktionen (MDX Modus): Hoher Eingabewert eines definierten Selektionsbereichs.   |
|```#{Extraction.Fields["0D_NW_CODE"].Selections[0].Value}#``` | Nur für BWCube Extraktionen (BICS Modus): Eingabewert einer definierten Selektion.  |
|```#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].LowerValue}#``` | Nur für BWCube Extraktionen (BICS Modus): Niedriger Eingabewert eines definierten Selektionsbereichs.   |
|```#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].UpperValue}#``` | Nur für BWCube Extraktionen (BICS Modus): Hoher Eingabewert eines definierten Selektionsbereichs.  |

