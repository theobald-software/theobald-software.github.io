### Über diese Seite 
Man kann über Xtract Universals Web-API verschiedene Metadaten-Informationen einer Extraktion abrufen. 

{: .box-note }
**Hinweis:** Die Sektionen über *Metadaten einer Extraktion*, *Parameter* und *Liste aller Extraktionen* sind seit [Version 4.27.1](https://kb.theobald-software.com/version-history/xtract-universal-version-history) als veraltet markiert.
Sie erhalten Zugriff auf die Metadaten über die [http-json-API](./metadata-zugriff-ueber-http-json).

### Metadaten einer Extraktion

Das URL-Pattern lautet: 
```
http://[host]:[port]/metadata/?name=[extractionName]
```
wobei [extractionName] für den Namen der Extraktion steht.

Die Metadatentabelle hat folgendes Schema:

| Spalte   | Typ                          | Beschreibung              |
|----------|------------------------------|---------------------------|
| POSITION | Integer                      | Position der Spalte       |
| NAME     | String                       | Name der Spalte           |
| DESC     | String                       | Spaltenbeschreibung       |
| TYPE     | Einstelliger ABAP Datentyp ID| ABAP Datentyp             |
| LENGTH   | Integer                      | Länge der Spalte          |
| DECIMALS | Integer                      | Anzahl der Dezimalstellen |
| KEY      | Bool                         | Spalte ist Primärschlüssel der Extraktion |

Die "einstellige ABAP Datentyp ID" ist [hier](http://mysaplib.com/00000531/348e72f16df74873e10000009b38f9b8/content.htm) definiert: 
           


**Beispiel**:<br>
Der Aufruf der Metadaten der Extraktion BSEG mit der URL ```http://localhost:8065/metadata/?name=BSEG``` liefert:

*POSITION,NAME,DESC,TYPE,LENGTH,DECIMALS,KEY*<br>
0,MANDT,Client,C,3,0,true<br>
1,BUKRS,Company Code,C,4,0,true<br>
2,BELNR,Accounting Document Number,C,10,0,true<br>
3,GJAHR,Fiscal Year,N,4,0,true<br>
4,BUZEI,Number of Line Item Within Accounting Document,N,3,0,true<br>
5,BUZID,Identification of the Line Item,C,1,0,false<br>
6,AUGDT,Clearing Date,D,8,0,false<br>
7,DMBTR,Amount in Local Currency,P,15,2,false<br>
8,KZBTR,Original Reduction Amount in Local Currency,P,15,2,false<br>

{: .box-note }
**Hinweis:** Datumsfelder wie *AUGDT* haben den Datentyp *D* (Spalte TYPE) sofern die Date Conversion in den Destination Settings aktiv ist. Ist die Date Conversion inaktiv, haben sie den Datentyp *C*.



### Parameter

Jede Extraktion hat ein Set an *Extraction*, *Source* und *Custom Parametern*.
Diese Parameter sind im Xtract Universal Designer unter "Run Extraction" einsehbar.


Die URL 
```
http://[host]:[port]/parameters/?name=[extractionName]
```
liefert die Liste der verfügbaren Parameter, welche im Run-Dialog erscheinen. 

Im folgenden Beispiel liefert die URL die folgenden Parameter:
```
http://localhost:8065/parameters/?name=Customers
```

*Name,Description,Category,Type,DefaultValue* <br>
preview,Enable/disable preview mode,Extraction,Flag,False <br>
clearBuffer,Clear/keep the result <br>buffer,Extraction,Flag,False <br>
rows,Maximum number of rows,Extraction,Number,0 <br>
where,Where Clause,Extraction,Text, <br>
packageSize,Package Size,Extraction,Number,50000 <br>
bg,Enable/disable background <br>extraction,Extraction,Flag,False <br>
decimalSeparator,Symbol between integer and fractional part,Extraction,Text,. <br>
columnSeparator,Symbol which indicates the start of a new column,Extraction,Text,"," <br>
lang,Logon Language,Connection,Text,EN <br>
client,Client,Connection,Text,800 <br>
sysnr,System Number,Connection,Number,0 <br>
ashost,Application Server,Connection,Text,ecc.theobald-software.com

### Liste aller Extraktionen 

Eine Liste aller in Xtract Universal vorhandenen Extraktionen kann über das folgende URL-Schema ausgegeben werden:

```
http://[host]:[port]
```

**Beispiel:** <br>
Der Aufruf von```http://localhost:8065/``` gibt eine Liste aller Extraktionen mit folgender Struktur zurück: <br>
*Name,Type,Source,Destination,LastRun,RowCount,LastChange,Created*



### Produkt-Version

Die aktuellen Versionsinformationen können über die nachfolgenden HTTP Abfragen ermittelt werden:
```
http://localhost:8065/CurrentVersion
```

Xtract Universal's Versionsinformationen können über folgende URL aufgerufen werden:
```
http://localhost:8065/ProductVersionHistory
```
```
http://localhost:8065/KernelVersionHistory
```
Eine Extraktionsliste aller Extraktionen auf dem Server wird ausgegeben, indem man die Basis-URL ohne jegliche Parameter aufruft:
```
http://localhost:8065/
```


### Log-Zugriff über Web-Service
Der Abschnitt [Log-Zugriff über Web-Service](./../logging/log-zugriff-ueber-http) beschreibt weitere Anwendungsfälle der Xtract Universal Metadaten Web API.
