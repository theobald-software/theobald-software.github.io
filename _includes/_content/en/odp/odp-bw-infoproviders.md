The Operational Data Provisioning framework allows you to extract data from the Infoproviders in your source BW and BW/4 HANA systems. 
Available InfoProvider types are dependent on your source BW and BW/4 HANA system.

SAP BW∕4HANA systems offer the following InfoProviders via the ODP BW context:
- DataStore objects (advanced) (with delta extraction)
- CompositeProvider - Object type HCPR (full extraction)
- InfoObjects
-- Master data
-- Texts
-- Hierarchies
- Query as InfoProvider

BW systems (dependent on the version) offer additionally the following InfoProviders via the ODP BW context:
- CompositeProvider - object type HCPR (full-extraction)
- InfoCubes (with delta extraction)
- Semantically partitioned objects
- HybridProviders
- MultiProviders
- InfoSets


Select the context and type to search for a BW InfoProvider. <br/>
![ODP BW Search](/img/content/odp/odp-component-bw-nwdemo-01.png){:class="img-responsive"}
<br/>
Click on OK, then you will see the available fields and the description. Click on Load live preview to see the data preview.<br/>
![ODP BW Preview](/img/content/odp/odp-component-bw-nwdemo-02-preview.png){:class="img-responsive"}

When the delta load is available for the source object in the SAP source system, the Delta Update option will be available in the ODP component. 