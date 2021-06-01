
{% include _content/de/parametrization/parametrization-about.md  %}

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Variant*|Siehe [Varianten und Selektionen](./varianten-und-selektionen).|
| *Edit*|Geben Sie eine SSIS-Variable als Auswahlkriterium ein, siehe [Varianten und Selektionen](./varianten-und-selektionen).|
|*Spool Destination / BatchJobDestination* | Siehe [Settings - Spool Destination / BatchJobDestination](./report-settings).|
|*BatchJobName*        |Siehe [Settings - BatchJobName](./report-settings).|
|*BatchJobTimeout*     |Siehe [Settings - BatchJobTimeout](./report-settings).|
|*ReportName*        |  *ReportName* sollte nicht als Struktur für Ergebnisse verwendet werden, da der Wert je nach Report stark variiert. |


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)