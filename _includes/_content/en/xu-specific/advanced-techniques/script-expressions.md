
### Syntax of Script Expressions

Script expressions use the C# syntax. They must begin and end with a hash symbol (#). The formula starts and ends with curly brackets ({}).<br>

**Example:** <br>
```#{ Extraction.TableName }# ```

{: .box-note }
**Note:** XU-specific custom expressions are case sensitive. 
Make sure to use the exact syntax as documented below.

#### IF-Statements 

An IF-statement (ternary operator) is supported and has the following syntax: ```iif([bool condition], [string trueResult], [string falseResult])``` 

**Examples:** 

| Input                                                   | Output   | Description|
|:--------------------------------------------------------|:---------|:-------|
|```#{ iif(DateTime.Now.Month==7, "July","Unknown")}# ```| July     | In month 7 the output is "July", all else is "Unknown". |
|```#{Extraction.ExtractionName}##{ iif(string.IsNullOrEmpty(Extraction.Context), string.Empty, "/" + Extraction.Context)}#```|| *Extraction.Context* returns a result only with ODP extractions. With all other extraction types the result is empty. If the extraction name is 'SAP_1' and the extraction type is 'Table', the resulting file path would be ```SAP_1/[filename]```. If the extraction name is 'SAP_2' and the extraction type is 'ODP' and a SAP DataSource (extraction context: SAPI) is being extracted, the resulting file path would be ```SAP_2/SAPI/[filename]```. 


### Script Expressions based on .NET 
Xtract Universal script expressions support the following .NET objects, properties and methods from the .NET System Namespace of Xtract Universal's current [.NET framework](https://help.theobald-software.com/en/xtract-universal/introduction/requirements#other-applications-and-frameworks):

*Object*, *Boolean*, *Char*, *String*, *SByte*, *Byte*, *Int16*, *UInt16*, *Int32*, *UInt32*, *Int64*, *UInt64*, *Single*, *Double*, *Decimal*, *DateTime*, *TimeSpan*, *Guid*, *Math*, *Convert*.

{: .box-note }
**Note:** The most common usage scenario is using the methods and properties of the .NET *DateTime* and *String* classes. 
For further information of supported [.NET classes and their properties and methods](https://docs.microsoft.com/en-us/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) including [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=net-5.0) and [String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7.2) see the Microsoft online documentation.

#### Supported Keywords
The following key words are supported: *true*, *false*, *null*.
