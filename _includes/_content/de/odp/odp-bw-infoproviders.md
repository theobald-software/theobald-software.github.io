Das Operational Data Provisioning Framework ermöglicht es Ihnen, Daten aus den Infoprovidern in Ihren Quellsystemen BW und BW/4 HANA zu extrahieren. 

Die verfügbaren InfoProvider-Typen sind abhängig von Ihrem BW und BW/4 HANA Quellsystem.

### InfoProvider verfügbar in SAP BW∕4HANA:

- DataStore-Objekte (erweitert) (mit Delta-Extraktion)
- CompositeProvider - Objekttyp HCPR (vollständige Extraktion)
- InfoObjects
Stammdaten
  - Texte
Hierarchien
- Query als InfoProvider

### Zusätzliche InfoProvider verfügbar in BW-Systemen

- CompositeProvider - Objekttyp HCPR (vollständige Extraktion)
- InfoCubes (mit Delta-Extraktion)
- Semantically partitioned objects
- HybridProviders
- MultiProviders
- InfoSets


### Using BW InfoProviders
When [searching](./odp-functions-ov#operational-data-provider) for BW InfoProviders, make sure to select the correct context. 
![ODP BW Search](/img/content/odp/odp-component-bw-nwdemo-01.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP component. 

![ODP BW Delta](/img/content/odp/odp-bw-infoprov-delta.png){:class="img-responsive"}

Click **[Load live preview]** to preview the data without executing an extraction.