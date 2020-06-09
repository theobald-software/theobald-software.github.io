---
ref: xu-pbi_connector-08
layout: page
title: XU Custom Parameter in Power BI
description: XU Benutzerdefinierte Parameter in PBI
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url:
progressstate: 5
---

Custom Parameter (benutzerdefinierte Parameter), die in Xtract Universal für eine Extraktion angelegt wurden, werden in Power BI Desktop als eingabebereit angezeigt.
Wenn Sie den Power BI Custom Connector verwenden, können die in Xtract Universal definierten Custom Parameter zum Zeitpunkt einer Extraktion in Power BI Desktop befüllt werden.

### Power BI Custom Connector 
Bei der Verwendung des Power BI Custom Connectors können XU Custom Parameter beim Erstellen einer Verbindung befüllt werden.

Sie haben eine Extraktion erstellt, die über XU Custom Parameter verfügt. Die Liste der Custom Parameter der ausgewählten Extraktion werden unter dem Tab *Custom* im Fenster *Run Extraction* angezeigt. 
Im dargestellten Beispiel enthält die Liste einen Eintrag *BUKRS_low*. <br>

![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_1.png){:class="img-responsive"}

In Power BI Desktop können Sie sich die Liste der verfügbaren XU Custom Parameter ansehen, wenn ein Report auf Basis der ausgewählten Extraktion erstellt wird. Die angezeigten XU Custom Parameter können in Power BI Desktop mit Werten befüllt werden. 
![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_2.png){:class="img-responsive"}

### Power Query M-Script

1. Öffnen Sie das Power Query M-Script.
2. Navigieren Sie zu "Parameters" und ersetzen Sie die Werte durch die echten Werte oder durch in Power BI definierte Parameter. 

```
    // Record containing run parameters with corresponding values, can be empty
    // Usage: <XU parameter name>= <value or Power BI parameter>
    // MUST NOT use "name" as a record field here
    Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],
```

Echte Werte:
![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_3.png){:class="img-responsive"}


Power BI Parameter:
![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_4.png){:class="img-responsive"}

![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_5.png){:class="img-responsive"}

*****
#### Weiterführende Links	
- [Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)
