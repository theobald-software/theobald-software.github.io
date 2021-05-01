Hier beschreiben wir ein kurzes Beispiel, das zeigt, wie man mit Hilfe eines SAP-Funktionsbausteins Daten in SAP schreibt. 

**SAP-Funktionsbaustein**

In SAP gibt es den folgenden kundeneigenen Funktionsbaustein Z_ECS_PRODUCT_CREATE_MULTI. 
Er hat einen Tabellenparameter *T_PRODUCTS*, der für die Eingabe verwendet werden kann. Die Tabelle hat folgenden Aufbau:

![ssis-write-sap-01](/img/content/ssis-write-sap-01.png){:class="img-responsive"}

**Tabelle im SQL Server** 

Im SQL Server habe ich die Tabelle SAP Products , die wir als Eingabetabelle verwenden werden. 

<details>
<summary>[SQL]</summary>
{% highlight sql %}
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
{% endhighlight %}
</details>

Die Tabelle hat den folgenden Inhalt:

![ssis-write-sql-01](/img/content/ssis-write-sql-01.png){:class="img-responsive"}

**SSIS** 

1.Die Quelle definieren. 

2.Das Functionsmodul definieren. Den Input Type für die entsprechende Tabelle auf *Pipeline* setzen.

![ssis-write-xtractis-fuba-01](/img/content/ssis-write-xtractis-fuba-01.png){:class="img-responsive"}

3.Die Komponenten miteinander verbinden. 

![ssis-write-xtractis-fuba-02](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive"}

4.Auf *Edit*  klicken, um die Spalten zu mappen. 

![ssis-write-xtractis-fuba-03](/img/content/ssis-write-xtractis-fuba-03.png){:class="img-responsive"}

5.Das SSIS-Packet ausführen. 

![ssis-write-xtractis-fuba-04](/img/content/ssis-write-xtractis-fuba-04.png){:class="img-responsive"}
