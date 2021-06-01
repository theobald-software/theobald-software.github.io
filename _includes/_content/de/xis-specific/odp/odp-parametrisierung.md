
{% include _content/de/parametrization/parametrization-about.md  %}

### Parameterisierung mit Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract ODP].[SubscriptionSuffix]*| Fügt dem von der ODP Komponente erstellten ODP Abonnement ein Suffix hinzu. Das erlaubt die Verwendung von SSIS Paketen in zwei unterschiedlichen SSIS Umgebungen, z.B. greifen QA und PROD. auf dasselbe SAP-System zu. Das Suffix erlaubt auch die Erstellung von Abonnenten für jede SSIS Umgebung.|
| *[Xtract ODP].[UpdateMode]*|Stellt den Update Mode einer Extraktion ein. Erlaubt Werte sind: (F)ull, (D)elta and (R)ecovery, siehe [Update Mode](./odp-functions-ov#load-verfahren-update-mode)|
| *[Xtract.ODP].[ExtractDataOnDeltaInit]*| Führt eine Delta-Initialisierung mit oder ohne Datenextraktion aus, siehe [Update Mode](./odp-functions-ov#load-verfahren-update-mode)|
| *[Xtract.ODP].[HierarchyName]*| Nur für Datenquellen vom Typ Hierarchy. Geben Sie den Namen der zu extrahierenden Hierarchie ein, siehe [Select Hierarchy](./odp-functions-ov#select-hierarchy). |
| *[Xtract.ODP].[PackageSize]*| Wählt die Paketgröße in Bytes, siehe [Advanced Settings](./odp-functions-ov#advanced-settings) |
| *[Xtract.ODP].[ &lt;Selection Parameter &gt;]*| Auswahlparameter, die in der Komponente definiert sind, sind in den *Properties* der Komponente verfügbar, siehe [Edit Parameters](./odp-functions-ov#parameter-bearbeiten---edit-parameters) |


****
#### Related Links
- [Ausdrücke für Properties verwenden](../parametrisierung/parametrisierung-properties#ausdrücke-für-properties-verwenden) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).