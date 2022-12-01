
#### Using Script Expressions as Dynamic File Names

Script expressions can be used to generate a dynamic file name. 
This allows generating file names that are composed of an extraction's properties, e.g. extraction name, SAP source object.
This scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input                                                   | Description|
|:--------------------------------------------------------|:-----------|
|```#{Source.Name}# ```|  Name of the extraction's SAP source.|
|```#{Extraction.ExtractionName}# ```| Name of the extraction. |
|```#{Extraction.Type}# ```|  Extraction type (*Table*, *ODP*, *DeltaQ*, etc.). |
|```#{Extraction.SapObjectName}# ```|  Name of the SAP object the extraction is extracting data from. |
|```#{Extraction.Timestamp}# ```|  Timestamp of the extraction.  |
|```#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}# ```  |Trims the first slash '/' of an SAP object, e.g. /BIO/TMATERIAL to BIO/TMATERIAL, so as not to create an empty folder in a file path.
|```#{Extraction.SapObjectName.Replace('/', '_')}#``` | Replaces all slashes '/' of an SAP object, e.g. /BIO/TMATERIAL to _BIO_TMATERIAL, so as not to split the SAP object name by folders in a file path.         |
|```#{Extraction.Context}# ```|  Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). |
|```#{Extraction.Fields["[NameSelectionFiels]"].Selections[0].Value}#```| Only for ODP extractions: returns the input value of a defined selection / filter.| 
|```#{TableExtraction.WhereClause}#``` | Only for Table extractions: returns the WHERE clause of the extraction.  |

For more information on script expressions, see [Script Expressions](../advanced-techniques/script-expressions).
