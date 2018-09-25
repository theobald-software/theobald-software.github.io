---
layout: page
title: Parameter-Mapping mit OData
description: Parameter-Mapping mit OData
product: erpconnect-services
parent: erstellen_von_odata_webservices
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=parameter_mapping_mit_odata
---

Im Vergleich zu den Standard-Webservices im SOAP-Format unterliegen OData-Webservices bestimmten Restriktionen. Es können beispielsweise bei den Standard-Funktionen *GetAll, Create, Update* und *Delete* keine Parameter direkt in der WebService Designer Oberfläche angelegt werden, da die *Parameter Dialogbox* keine Eingaben zulässt. Es ist dennoch möglich, den angelegten *Custom Data Type* auf die entsprechenden Tabellenfelder des Funktionsbausteins BAPI_REQUISITION_CREATE zu mappen, wie wir in den folgenden Schritten demonstrieren werden.

![WSD-OData-Example15](/img/content/WSD-OData-Example15.png){:class="img-responsive"}

Der Eingabe Parameter ist eine Entität. Der SAP-Funktionsbaustein erwartet eine Tabelle bzw. eine Liste von diesen Entitäten. <br>
Daher nutzen wir die Custom Code-Aktivität, um die Entität in eine Liste aufzunehmen, um anschließend diese Liste der Tabelle des Funktionsbausteins zuzuweisen. 

Legen Sie zunächst die Liste als Workflow-Variable an und nennen Sie diese varItems. Wählen Sie als Datentyp *List of ReqItems*. 

![WSD-OData-Example16](/img/content/WSD-OData-Example16.png){:class="img-responsive"}

Fügen Sie anschließend die *Custom Code* Aktivität oberhalb der Execute Function Aktivität zum Ablaufdiagramm hinzu. Tragen Sie folgende beiden Befehlszeilen im Konfigurationsfenster ein. Damit wird bewirkt, dass die Liste initialisiert wird und die Entität zur Liste hinzugefügt wird.

varItems = new List();<br>
varItems.Add(${Parameter:entity}); 

![WSD-OData-Example17](/img/content/WSD-OData-Example17.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit *OK*. Die Variable varItems steht nun als listenartiger Parameter für das Mapping zur Verfügung. 

![WSD-OData-Example18](/img/content/WSD-OData-Example18.png){:class="img-responsive"}

Rufen Sie anschließend die *Execute Function* Aktivität auf, um das Mapping vorzunehmen. Scrollen Sie herunter zum *TABLES* Input Abschnitt und wählen Sie zunächst die Tabelle REQUISITION_ITEMS. Wählen Sie in der *Mapping* Spalte den eben angelegten Listenparameter varItems und öffnen Sie den Mapping-Dialog, um die Parameter DOC_TYPE, MATERIAL, PLANT, QUANTITY, DELIV_DATE, ACCTASSCAT zu mappen. Sie können die Automap Funktion hierfür nutzen.  

![WSD-OData-Example19](/img/content/WSD-OData-Example19.png){:class="img-responsive"}

![WSD-OData-Example20](/img/content/WSD-OData-Example20.png){:class="img-responsive"}

Bestätigen Sie Ihre Eingaben mit *OK* und wählen Sie anschließend die Tabelle REQUISITION_ACCOUNT_ASSIGNMENT, um den verbleibenden Parameter COST_CTR zu mappen. 

![WSD-OData-Example21](/img/content/WSD-OData-Example20.png){:class="img-responsive"}

![WSD-OData-Example22](/img/content/WSD-OData-Example22.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit OK. Der Webservice ist damit fertig konfiguriert und kann auf den SharePoint-Server deployed werden. 

![WSD-OData-Example23](/img/content/WSD-OData-Example23.png){:class="img-responsive"}

![WSD-OData-Example24](/img/content/WSD-OData-Example24.png){:class="img-responsive"}

Das EDMX Dokument kann anschließend im Webbrowser angezeigt werden.

![WSD-OData-Example25](/img/content/WSD-OData-Example25.png){:class="img-responsive"}
