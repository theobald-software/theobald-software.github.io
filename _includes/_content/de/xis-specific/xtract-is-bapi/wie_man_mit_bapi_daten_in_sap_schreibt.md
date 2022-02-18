Dieses Beispiel zeigt, wie man mit Hilfe eines SAP-Funktionsbausteins Daten in SAP schreibt. 


### Voraussetzungen

**SAP-Funktionsbaustein**

Dieses Beispiel verwendet den kundeneigenen SAP Funktionsbaustein Z_ECS_PRODUCT_CREATE_MULTI. 
Er hat einen Tabellenparameter *T_PRODUCTS*, der für die Eingabe verwendet werden kann. Die Tabelle hat folgenden Aufbau:

![ssis-write-sap-01](/img/content/ssis-write-sap-01.png){:class="img-responsive"}

**Tabelle im SQL Server** 

Dieses Beispiel verwendet die SQL Server Tabelle *SAP Products*, die als Eingabetabelle verwenden wird. 

```
CREATE TABLE [SAP Products] (
    [MANDT] nvarchar(3),
    [PRODUCTNR] nvarchar(18),
    [DESCTEXT] nvarchar(40),
    [PRODTYPE] nvarchar(4),
    [STOCKQUAN] numeric(18,3),
    [MEINS] nvarchar(3),
    [ERDAT] nvarchar(8),
    [ERZET] nvarchar(6)
)
```

Die Tabelle hat den folgenden Inhalt:

![ssis-write-sql-01](/img/content/ssis-write-sql-01.png){:class="img-responsive"}

### Workflow mit SSIS

1. Definieren Sie die SQL Server Tabelle *SAP Products* als Quelle. 
2. Definieren Sie den Funktionsbaustein Z_ECS_PRODUCT_CREATE_MULTI in der Xtract BAPI Komponente. 
Markieren Sie die Tabelle *T_PRODUCTS* für die Ausgabe, indem Sie die Checkbox in der Ausgabespalte anhaken.<br>
![ssis-write-xtractis-fuba-01](/img/content/ssis-write-xtractis-fuba-01.png){:class="img-responsive"}
3. Verbinden Sie die Komponenten Quelle und Xtract BAPI miteinander. <br>
![ssis-write-xtractis-fuba-02](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive"}
4. Rechtsklicken Sie auf die Verbindung der Komponenten und wählen Sie **Resolve References**. Mappen Sie die Spalten der Eingabetabellen. <br>
5. Führen Sie das SSIS-Paket aus. <br>
![ssis-write-xtractis-fuba-04](/img/content/ssis-write-xtractis-fuba-04.png){:class="img-responsive"}
