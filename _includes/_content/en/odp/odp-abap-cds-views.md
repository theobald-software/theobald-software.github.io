SAP has introduced a new concept for data modelling called Core Data Service (CDS). Data models based on CDS serve as central definitions that can be used in many different domains, such as transactional and analytical applications.  

CDS is defined using an SQL-based data definition language (DDL) leveraging standard SQL with some additional concepts, such as associations, which define the relationships between CDS views, and annotations, which direct the domain-specific use of CDS artefacts. There are two types of CDS available, the HANA CDS (defined in XS engine) and ABAP CDS. 


For each ABAP CDS entity defined in the DDL source code, an SQL view is generated in the ABAP Dictionary. Like views created by means of Dictionary tools (transaction SE11), ABAP CDS entities can be accessed in ABAP using Open SQL statements. 

CDS has become the cornerstone for application development at SAP. A key example of this can be seen in S/4HANA which uses CDS to provide both core transactional functionality as well as analytical content for reporting. In BW/4 HANA, ABAP based CDS views can be used for data extraction.  

Two possible use cases are:
- Direct access to a CDS view from BW/4 HANA and 
- Delta extraction from a CDS view in S/4 HANA to BW

CDS Views support Full and Delta Extraction. 

**Replacing BW Extractors with CDS views in S/4HANA**
For the most-part, traditional BW extractors can be used to extract data from an S/4HANA system. Due to simplifications in the S/4HANA system, some extractors have been deprecated or can no longer be used in the same way. For these extractors, SAP may deliver CDS Views which are extraction relevant (via the analytical annotations).

Select the context and type to search for an ABAP CDS View. <br/>
![ODP ABAP CDS View](/img/content/odp/odp-component-cds-costcenter-01.png){:class="img-responsive"}
<br/>
Click on OK, then you will see the available fields and the description. Click on Load live preview to see the data preview.
<br/>
![ODP ABAP CDS View Preview](/img/content/odp/odp-component-cds-costcenter-02-preview.png){:class="img-responsive"}
<br/>
When the delta load is available for the source object in the SAP source system, the Delta Update option will be available in the ODP component. 