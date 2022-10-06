The Operational Data Provisioning (ODP) framework allows you to extract data from the InfoProviders in your source BW and BW/4 HANA systems. 

Available InfoProvider types are dependent on your source BW and BW/4 HANA system.

### InfoProviders Available in SAP BW∕4HANA:

- DataStore objects (advanced) (with delta extraction)
- CompositeProvider - Object type HCPR (full extraction)
- InfoObjects
  - Master data
  - Texts
  - Hierarchies
- Query as InfoProvider

### Additional InfoProviders Available in BW systems 

- CompositeProvider - object type HCPR (full extraction)
- InfoCubes (with delta extraction)
- Semantically partitioned objects
- HybridProviders
- MultiProviders
- InfoSets


### Using BW InfoProviders
Things that need to be considered when using BW InfoProviders:
1. When [searching](./odp-define) for BW InfoProviders, make sure to select the correct context. 
![ODP BW Search](/img/content/odp/odp-component-bw-nwdemo-01.png){:class="img-responsive"}
2. When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 
3. Click **[Load live preview]** to preview the data without running an extraction.