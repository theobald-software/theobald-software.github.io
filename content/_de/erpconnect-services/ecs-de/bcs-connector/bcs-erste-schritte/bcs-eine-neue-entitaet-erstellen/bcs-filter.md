---
layout: page
title: Filter
description: Filter
product: erpconnect-services
parent: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-filter
---

Mit dem SharePoint BCS, können Sie Filter einsetzen, um Benutzereingaben abzufangen und an die Methoden übergeben, wenn diese im externen System ausgeführt werden.

Die nachfolgenden Filtertypen werden durch den BCS Connector unterstützt:

**Limit Filter** -	Wird gebraucht, um die Anzahl der durch die Methode zurückgegebenen Datensätze (Entitätsinstanzen) zu begrenzen.<br>
**Wildcard Filter** -	Wird gebraucht, um nach einem speziellen Suchmuster mit Zeichen und Wildcards in einer Eigenschaft der Entität zu suchen. Es werden nur die passenden Datensätze (Entitätsinstanzen) zurückgegeben.<br>
**Comparison Filter** -	Wird gebraucht, um einen Vergleichswert für eine Eigenschaft der Entität zu definieren. Es werden nur die passenden Datensätze (Entitätsinstanzen) zurückgegeben. Die Vergleichsoperatoren können sein:
- Equal (gleich)
- Less than (kleiner als)
- Less than or equal (kleiner als oder gleich)
- Greater than (größer als)
- Greater than or equal (größer als oder gleich)  

Sie haben die Möglichkeit, Vergleichsfilter bei Finder-Operationen für Tabellen und Funktionsbausteine zu definieren. Ein Filter auf Input-Parameter ist grundsätzlich nur auf Funktionsbausteine anwendbar. 

Ein Vergleichsfilter besteht aus zwei Informationen: Einem Operator (>, <, =, usw.) und dem eigentlichen Filterwert. Um diesen Filter mit dem Input-Parameter matchen zu können, müsste der Funktionsbaustein einen String-Parameter in der Form ">45" oder "=ABC" verstehen und verarbeiten können, um korrekte Resultate zu erzeugen. Oder man müsste einen Filter auf zwei Parameter aufteilen. Z-Bausteine könnten sich auf eine solche Parameterübergabe einstellen.

Der Filtertyp Wildcard ist hier unter den Filtern eine Ausnahme und zugleich ein Kompromiss. Ohne Angabe des Wildcard-Zeichen ( * ), entspricht dieser Filter einem Comparison (Equal)-Filter. Diesen kann man bspw. im Funktionsbaustein BAPI_EMPLOYEE_GETDATA und dem Input-Parameter LASTNAME_M einsetzen, weil dieser Filterausdrücke wie "Theo* " versteht.

**Filter bei Tabellen**

Damit Tabellen-Daten bereits gefiltert aus dem SAP-System nach SharePoint geliefert werden, können Sie Filter auf Tabellenfelder definieren. Jeder Filter ist dabei Teil der finalen WHERE Clause und wird auf dem SAP-System ausgeführt. Grundsätzlich unterstützten Tabellenobjekte sämtliche Filtertypen. Die zusätzliche optionale WHERE Clause-Angabe wurde eingeführt, damit der Anwender einen festen Teil des WHERE-Statement festlegen kann, der nicht durch einen Filter definiert sein soll. Input-Parameter existieren nicht für Tabellenobjekte, sondern beziehen sich auf die Eingabe-Parameter von Funktionsbausteinen. 


**Filter bei Funktionsbausteinen** 

Einen Vergleichsfilter können Sie bei Funktionsbausteinen nur mit Entity-Feldern verknüpfen, nicht aber mit Input-Parametern. 
Grundsätzlich machen Filter auf Input-Parametern nur bei Bausteinen Sinn, welche diesen Filter verstehen und verarbeiten. 
Input-Filter, welche vom Funktionsbaustein verarbeitet werden, sorgen dafür, dass die Daten auf SAP-Seite schon gefiltert werden. 
Entity-Filter sorgen dafür, dass die von SAP gelieferten Daten in SharePoint (BCS) gefiltert werden. 

**Filterverarbeitung in SharePoint**

Grundsätzlich sind die Filter, die im BCS-Connector definiert werden, Standard-Filter und werden dann verwendet, wenn keine anderen Filter beim Aufruf angegeben sind. Das ist bei der Anzeige einer externen Liste in SharePoint oder im Preview-Modus der Finder-Operation im BCS Connector Designer der Fall. 

In bestimmten Konstellationen kann es jedoch vorkommen, dass in SharePoint Filterangaben automatisch konvertiert werden. Die Filterangaben können dadurch auf SAP-Seite unter Umständen nicht mehr verstanden werden. Der Anwender hat an dieser Stelle keinen Einfluss darauf. <br>Letztendlich erfolgt der Aufruf des BCS-Connectors durch SharePoint und nur SharePoint bestimmt, mit welchen Operatoren (Contains, StartWith,…) es externe Daten in seiner eigenen Oberfläche abruft. Wir empfehlen, dass Sie bei den aufgeführten Konstellationen auf das Setzen von Wildcards verzichten, oder - falls es sich um einen kundeneigenen Funktionsbaustein handelt - die Implementierung so anpassen, dass SAP die konvertierten Werte versteht. 

*External Data Columns*<br>
Die Konvertierung von Filterangaben betrifft zum einen die Einbindung von Externen Inhaltstypen aus dem BCS Connector in SharePoint-Listen als External Data Column. Wenn hier im Auswahldialog unter Find ein Filter ausgewählt wird, dann konvertiert SharePoint den angegeben Suchtext immer als Filter mit dem Operator Contains (und nicht als EqualsTo) und fügt automatisch am Anfang und am Ende einen * an. Als Limit wird automatisch der Wert 201 definiert. Wenn der Suchtext zusätzlich noch ein * enthält, wird dieser kodiert und liefert demzufolge kein Ergebnis. 

Beispiel für einen Filter auf den Inport-Parameter NAME1 im Funktionsbaustein SD_RFC_CUSTOMER_GET:<br>
Aus dem Suchtext Be* macht SharePoint *Be\**, was im SAP-Funktionsbaustein wiederum zu %Be\*% konvertiert wird. Wenn nur Be eingegeben wird, erhält man ein Ergebnis.

*Webparts*<br>
Beim Webpart Business Data List innerhalb von Site Pages wird der Suchtext beispielweise nicht encoded. Das Webpart erlaubt zusätzlich die Auswahl von Operatoren. Aber auch hier fügt SharePoint am Anfang und am Ende ein * ein. 

Beispiel für einen Filter auf den Import-Parameter NAME1 im Funktionsbaustein SD_RFC_CUSTOMER_GET:<br>
Aus dem Suchtext Be* kommt für den Operator Contains beim Baustein *Be** an, was zu %Be%% konvertiert wird. Mit dieser Eingabe werden alle Datensätze zurückliefert, die Be im Feld NAME1 enthalten.