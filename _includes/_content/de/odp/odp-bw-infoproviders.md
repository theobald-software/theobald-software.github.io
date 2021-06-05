Das Operational Data Provisioning Framework ermöglicht es Ihnen, Daten aus den Infoprovidern in Ihren Quellsystemen BW und BW/4 HANA zu extrahieren. 

Die verfügbaren InfoProvider-Typen sind abhängig von Ihrem BW und BW/4 HANA Quellsystem.

### InfoProvider verfügbar in SAP BW∕4HANA:

- DataStore-Objekte (erweitert) (mit Delta-Extraktion)
- CompositeProvider - Objekttyp HCPR (vollständige Extraktion)
- InfoObjects
  - Stammdaten
  - Texte
  - Hierarchien
- Query als InfoProvider

### Zusätzliche InfoProvider verfügbar in BW-Systemen

- CompositeProvider - Objekttyp HCPR (vollständige Extraktion)
- InfoCubes (mit Delta-Extraktion)
- Semantically partitioned objects
- HybridProviders
- MultiProviders
- InfoSets


### BW InfoProviders verwenden
Worauf Sie bei der Verwendung von BW Infoproviders achten müssen: 
1. Wenn Sie nach [suchen](./odp-define) stellen Sie sicher, dass Sie den richtigen Kontext auswählen. 
![ODP BW Search](/img/content/odp/odp-component-bw-nwdemo-01.png){:class="img-responsive"}
2. Wenn Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option **Delta Update** in der ODP-Komponente verfügbar. 
3. Klicken Sie auf **[Load live preview]**, um eine Echtzeitvorschau anzuzeigen, ohne dabei eine Extraktion auszuführen.
