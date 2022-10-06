
The following section deals with data modeling concept Core Data Service (CDS). 
According to the CDS concept data models based on CDS serve as central definitions that can be used in many different domains, such as transactional and analytical applications.  

CDS is defined using an SQL-based data definition language (DDL). 
DLL leverages the standard SQL with several additional concepts, such as associations, which define the relationships between CDS views, and annotations, which direct the domain-specific use of CDS artifacts.

### Available CDS
There are two types of CDS available:
- HANA CDS (defined in XS engine) 
- ABAP CDS

For each ABAP CDS entity defined in the DDL source code, an SQL view is generated in the ABAP Dictionary. 
The same way as the views created with Dictionary tools (transaction SE11), ABAP CDS entities can be accessed in ABAP using Open SQL statements. 

CDS is important for SAP application development. For example, S/4HANA uses CDS to provide both core transactional functionality as well as analytical content for reporting. 
In BW/4 HANA, ABAP based CDS views can be used for data extraction.  

Two possible use cases for CDS:
- Direct access to a CDS view from BW/4 HANA  
- Delta extraction from a CDS view in S/4 HANA to BW

CDS Views support Full and Delta Extraction. 

### Replacing BW Extractors with CDS views in S/4HANA
In majority of cases traditional BW extractors can be used to extract data from an S/4HANA systems. 
Due to simplifications in the S/4HANA system, several extractors are now deprecated or can no longer be used in a usual manner. 
To use the deprecated or altered extractors, SAP may deliver extraction relevant (via the analytical annotations) CDS Views.

### Using ABAP CDS Views

{: .box-note }
**Note:**To find an ABAP CDS view it must have the following Annotation: ```@Analytics.dataExtraction.Enabled: true```. If the source SAP system is not on a HANA DB, an additional Annotation is needed: ```@Analytics.dataCategory: #CUBE/#FACT/#DIMENSION```.

Things that need to be considered when using BW InfoProviders:
1. When [searching](./odp-define) for ABAP CDS Views, make sure to select the correct context. 
![ODP ABAP CDS View](/img/content/odp/odp-component-cds-costcenter-01.png){:class="img-responsive"}
2. When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 
3. Click **[Load live preview]** to preview the data without running an extraction.
