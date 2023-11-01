
#### Using Script Expressions as Dynamic Folder Paths

Script expressions can be used to generate a dynamic folder path.
This allows generating folder paths that are composed of an extraction's properties, e.g., extraction name, SAP source object.
The described scenario supports script expressions based on .NET and the following XU-specific custom script expressions:

| Input                                                   | Description|
|:--------------------------------------------------------|:-----------|
|```#{Source.Name}# ```|  Name of the extraction's SAP source.|
|```#{Extraction.ExtractionName}# ```| Name of the extraction. |
|```#{Extraction.Type}# ```|  Extraction type (*Table*, *ODP*, *BAPI*, etc.). |
|```#{Extraction.SapObjectName}# ```|  Name of the SAP object the extraction is extracting data from. |
|```#{Extraction.Timestamp}# ```|  Timestamp of the extraction.  |
|```#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}# ```  |Removes the first slash '/' of an SAP object. <br> Example: /BIO/TMATERIAL to BIO/TMATERIAL - prevents creating an empty folder in a file path.
|```#{Extraction.SapObjectName.Replace('/', '_')}#``` | Replaces all slashes '/' of an SAP object. <br> Example: /BIO/TMATERIAL to _BIO_TMATERIAL - prevents splitting the SAP object name by folders in a file path.         |
|```#{Extraction.Context}# ```|  Only for ODP extractions: returns the context of the ODP object (*SAPI*, *ABAP_CDS*, etc). |
|```#{Extraction.Fields["[NameSelectionFields]"].Selections[0].Value}#```| Only for ODP extractions: returns the input value of a defined selection / filter.| 
|```#{Odp.UpdateMode}#```| Only for ODP extractions: returns the update mode (*Delta*, *Full*, *Repeat*) of the extraction.| 
|```#{TableExtraction.WhereClause}#``` | Only for Table extractions: returns the WHERE clause of the extraction.  |
|```#{Extraction.Fields["[0D_NW_CODE]"].Selections[0].Value}#``` | Only for BWCube extractions (MDX mode): returns the input value of a defined selection.  |
|```#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].LowerValue}#``` | Only for BWCube extractions (MDX mode): returns the lower input value of a defined selection range.  |
|```#{Extraction.Fields["[0D_NW_CHANN]"].RangeSelections[0].UpperValue}#``` | Only for BWCube extractions (MDX mode): returns the upper input value of a defined selection range.  |
|```#{Extraction.Fields["0D_NW_CODE"].Selections[0].Value}#``` | Only for BWCube extractions (BICS mode): returns the input value of a defined selection. |
|```#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].LowerValue}#``` | Only for BWCube extractions (BICS mode): returns the lower input value of a defined selection range.  |
|```#{Extraction.Fields["0D_NW_CHANN"].RangeSelections[0].UpperValue}#``` | Only for BWCube extractions (BICS mode): returns the upper input value of a defined selection range.  |

