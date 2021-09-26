Verschiedene Einstellungen der Extraktionen (z. B. Package Size, Selektionskriterien, etc.) können parametrisiert werden.
Die Parameter und die Eigenschaften (Properties) werden zur Laufzeit des SSIS-Pakets mit Hilfe von Standard-SSIS-Funktionen wie Ausdrücken, Variablen usw. gefüllt. 

Dazu bietet Xtract IS zwei technische Möglichkeiten an:
- [Expression Properties](./parametrisierung/parametrisierung-properties) (Eigenschaftsausdrücke)
- [SSIS Variablen](./parametrisierung/parametrisierung-variablen)

{: .box-tip }
**Empfehlung:** Microsofts bevorzugte und empfohlene Art der Parametrisierung ist die Verwendung von *Properties*. 

Abhängig von der Xtract Komponente können Sie entweder SSIS Variablen oder *Data Flow Properties* oder beides verwenden, um Parameter zu übergeben.

### Parametrisierungsoptionen der Komponente 

| Komponente   | Variablen | Eigenschaften |
|-------------|:-----:|:----:|
| [BAPI](./xtract-is-bapi/parametrisierung)        |   x    |      | 
| [BW Cube](./bwcube/parametrisierung)     |   x    |      | 
| [BW Hierarchy](./hierarchy/parametrisierung)|    x   |      |
| [BW Loader](./bw-loader/parametrisierung)|    x   |      |
| [DeltaQ](./xtract-is-deltaq/parametrisierung)      | x      |  x    |
| [ODP](./odp/odp-parametrisierung)         |   x    |   x   |
| [OHS](./open-hub-service/parametrisierung)         |     x  |   x   |
|[Query](./query/parametrisierung)       |   x    |      |
| [Report](./abap-reports/parametrisierung) |    x   |      | 
| [Table](./xtract-is-table/table-parametrisierung)       | x      |  x    |
