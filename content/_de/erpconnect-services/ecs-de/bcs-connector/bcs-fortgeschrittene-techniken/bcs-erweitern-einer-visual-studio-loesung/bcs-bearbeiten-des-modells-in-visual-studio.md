---
ref: ecs-extending-a-solution-in-visual-studio-03
layout: page
title: Bearbeiten des Modells in Visual Studio
description: Bearbeiten des Modells in Visual Studio
product: erpconnect-services
parent: bcs-erweitern-einer-visual-studio-loesung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-bearbeiten-des-modells-in-visual-studio
---

In den nachfolgenden Schritten exportieren Sie das 'SAP PO Model' nach Visual Studio und erweitern die Lösung dort. Sie werden dem Modell eine benutzerdefinierte Methode *Release* hinzufügen, die es Ihnen erlaubt eine ausgewählte Bestellung freizugeben.

**Das Modell nach Visual Studio exportieren**

Um ein Modell als Visual Studio 2010 Solution zu exportieren, betätigen Sie den *Export to VS2010* Befehl auf dem Ribbon.

Geben Sie die Exportparameter für die Solution an und betätigen Sie OK.

In diesem Beispiel ändern Sie den the *Solution Folder* und bei den übrigen Parametern übernehmen wir die Standardwerte und die Standardsprachauswahl 'CSharp'.

Für nähere Informationen lesen Sie das Kapitel [Exportieren eines Modells](../../bcs-erste-schritte/bcs-exportieren-eines-modells).

![BCS-PO-VS-Export](/img/content/BCS-PO-VS-Export.png){:class="img-responsive"}

Sie sollten jetzt eine Bestätigungsmeldung sehen, dass die Visual Studio Solution erfolgreich erstellt wurde. Im Explorerfenster sollten Sie jetzt den geöffneten Solution-Ordner, die Solution Datei (.sln) und einen Unterordner mit den Quellcodedateien der Solution sehen.



Hinzufügen der Release Methode

Öffnen Sie die Solution Datei (.sln) in Visual Studio 2010. Das Solution Explorer Fenster in Visual Studio zeigt die Struktur und den Inhalt der Solution.

Unterhalb des Solutionknotens sehen Sie ein SharePoint Projekt 'SAPPOModel' (oder den Namen den Sie beim Export des Modells nach Visual Studio angegeben haben). Dieses Projekt beinhaltet das BCS Modell 'SAPPOModelVS2010' und eine C#-Codedatei mit dem Namen 'ServiceBase.cs'.

Erweitern Sie das BCS Modell 'SAPPOModelVS2010'. Sie sehen drei Elemente unterhalb des Modellknotens:

**PO_HEADERS.cs** -	 C# Klassendefinitionsdatei für die Purchase Order Entität.<br>
**PO_HEADERSService.cs** -	 C# Dienstdefinitionsdatei für die Purchase Order Entitätsmethoden.<br>
**SAPPOModelVS2010.bdcm** -	 BDC Model Datei.

Öffnen Sie die BDC Modelldatei 'SAPPOModelVS2010.bdcm' mit einem Doppelklick im Designerfenster.

Das Designerfenster zeigt die 'PurchaseOrders' Entität an. Die Entität hat den Identifier 'PONumber' und die zwei Methoden 'ReadData' und 'ReadDataItem'. Wählen Sie die Entität 'BDC Method Details', um die Eigenschaften im unteren Fenster anzuzeigen.

Erweitern Sie den Methodenbaum, um die Parameter, Instanzen und Filter anzuzeigen.

![BCS-PO-VS-BDC-Model-01](/img/content/BCS-PO-VS-BDC-Model-01.png){:class="img-responsive"}

Öffnen Sie im *Solution Explorer* Fenster die 'PurchaseOrders.cs' mit einem Doppelklick.


Die Datei beinhaltet die Klasseninformation für die 'PurchaseOrders' Entität.

![BCS-PO-VS-BDC-Model-02](/img/content/BCS-PO-VS-BDC-Model-02.png){:class="img-responsive"}

Öffnen Sie im *Solution Explorer* Fenster die 'PurchaseOrdersService.cs' Datei mit einem Doppelklick.


Die Datei beinhaltet den Quellcode für die beiden Public Methoden der Entität, 'ReadData' und 'ReadDataItem'. Die anderen Methoden werden benötigt, um die Datenstrukturen zu formatieren. 

![BCS-PO-VS-BDC-Model-03](/img/content/BCS-PO-VS-BDC-Model-03.png){:class="img-responsive"}

Gehen Sie zurück zum Modell Designer Fenster, indem Sie die Registerkarte 'SAPPOModelVS2010' wählen.


Minimieren Sie im *BDC Method* Details Fenster die vorhandenen Methoden 'ReadData' und 'ReadDataItem'.

Klicken Sie auf und wählen *Create Blank Method*  aus dem Menü.

![BCS-PO-VS-BDC-Model-04](/img/content/BCS-PO-VS-BDC-Model-04.png){:class="img-responsive"}

Ändern Sie im *Properties* Fenster den Namen der Methode in 'Release'.

![BCS-PO-VS-BDC-Model-05](/img/content/BCS-PO-VS-BDC-Model-05.png){:class="img-responsive"}

Im *BDC Method Details* Fenster, unterhalb des *Parameters* Knoten, wählen Sie *Add a Parameter* und dann .

![BCS-PO-VS-BDC-Model-06](/img/content/BCS-PO-VS-BDC-Model-06.png){:class="img-responsive"}

Mit Hilfe des *Properties* Fensters ändern Sie den Namen des neuen Parameters in 'O_NUMBER'.

![BCS-PO-VS-BDC-Model-07](/img/content/BCS-PO-VS-BDC-Model-07.png){:class="img-responsive"}

Wählen die Variable in der Spalte *Type Descriptor*. Benutzen Sie das Eigenschaftenfenster, um den Namen für den *Type Descriptor* in 'PO_NUMBER' zu ändern.

![BCS-PO-VS-BDC-Model-08](/img/content/BCS-PO-VS-BDC-Model-08.png){:class="img-responsive"}

Scrollen Sie im *Properties* Fenster herunter, um 'PurchaseOrder' im *Identifier* Feld auszuwählen.

![BCS-PO-VS-BDC-Model-09](/img/content/BCS-PO-VS-BDC-Model-09.png){:class="img-responsive"}

Wiederholen Sie den vorherigen Schritt, um einen zweiten Eingabeparameter mit dem Namen 'PO_REL_CODE' zu definieren. Für den *Type Descriptor* geben Sie 'PO_REL_CODE' ein und als Typ *System.String*.

![BCS-PO-VS-BDC-Model-10](/img/content/BCS-PO-VS-BDC-Model-10.png){:class="img-responsive"}

Normalerweise würden Sie für Methoden die die gleichen Schritte benutzen, um einen oder mehrere Rückgabeparameter zu definieren. Für diese Übung überspringen wir diesen Schritt allerdings.

Im *BDC Method Details* Fenster, unterhalb des Instances Knoten, wählen Sie *Add a Method Instance* und *dann* . Beachten Sie, dass die *Finder Instance* die einzig mögliche Auswahl ist.

Im *Properties* Fenster ändern Sie den Wert für *Name* in 'Relase' und *Type* in 'Updater'.

![BCS-PO-VS-BDC-Model-11](/img/content/BCS-PO-VS-BDC-Model-11.png){:class="img-responsive"}

Im *Solution Explorer* Fenster öffnen Sie die 'PurchaseOrdersServices.cs' Datei mit einem Doppelklick.

Scrollen Sie bis zur ‘Release’ Methode, die wie im nachfolgenden Codefenster aussieht:

{% highlight javascript %}
public static void Release(string PO_NUMBER, string PO_REL_CODE)
{
    throw new System.NotImplementedException();
}
{% endhighlight %}

Ersetzen Sie den Code der Methode um die Freigabemethode basierend auf dem SAP-Interface 'BAPI_PO_RELEASE' zu implementieren:


{% highlight visualbasic %}
public static void Release(string PO_NUMBER, string PO_REL_CODE)
{
    R3Connection connection = GetConnection();

    RFCFunction function = connection.CreateFunction("BAPI_PO_RELEASE");
    function.Exports["PURCHASEORDER"].ParamValue = PO_NUMBER;
    function.Exports["PO_REL_CODE"].ParamValue = PO_REL_CODE;
    function.Execute();
}
{% endhighlight %}

Im *Solution Explorer* klicken Sie mit der rechten Maustaste auf das 'SAPPOModel' Projekt und klicken Build, um das Projekt zu kompilieren. Das Output Fenster sollte nun das erfolgreiche Kompilieren des Projektes anzeigen. 


![BCS-PO-VS-BDC-Model-12](/img/content/BCS-PO-VS-BDC-Model-12.png){:class="img-responsive"}

