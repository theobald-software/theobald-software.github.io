---
ref: ecs-sin-nintex-forms-05
layout: page
title: Web Requests in Nintex Forms ausführen
description: Web Requests in Nintex Forms ausführen
product: erpconnect-services
parent: nintex_forms_fuer_sharepoint
permalink: /:collection/:path
weight: 5
lang: de_DE
---

Eine Möglichkeit, ohne JavaScript-Code auf SAP in Nintex Forms zuzugreifen, besteht über Webservice-Aufrufe. Mit der Standard Nintex Forms *Web Request* Control können SOAP Webservices für SAP Lese- und Schreibzugriff aufgerufen werden.<br>   
Im folgenden Beispiel wird ein Webservice zum Lesen von SAP-Kundendaten aufgerufen und die Rückgabewerte in einer Dropdown-Liste angezeigt.

**Schritt 1: Erstellen Sie einen Webservice**.

Der erste Schritt besteht in der Erstellung eines SOAP-Webservice mit dem WebService Designer, der mit ERPConnect Services bereitgestellt wird. Detaillierte Informationen zur Funktionsweise des WebService Designers und Anwendungsbeispiele finden Sie im [folgenden](https://help.theobald-software.com/de/erpconnect-services/ecs-de/webservice-designer) Abschnitt in der Online-Hilfe. <br>

In diesem Beispiel wird eine einzige Webservice-Operation angelegt, bei der der Funktionsbaustein SD_RFC_CUSTOMER_GET aufgerufen wird. Dieser remotefähige Standardfunktionsbaustein extrahiert Kundendaten aus der Stammdatentabelle KNA1 und ermöglicht die Suche nach Kundennamen oder -nummern.<br>    

Wir verwenden das Feld NAME1 als Eingabefilter und erstellen dazu einen entsprechenden Input-Parameter. 
Als Ausgabeparameter verwenden wir die Tabelle CUSTOMER_T, aus der wir nur drei Felder zurückgeben: Kundennummer (KUNNR), Kundenname (NAME1) und Ort (ORT01)    

Deployen Sie den Webservice nach der erfolgreichen Konfiguration auf den SharePoint-Server.

**Schritt 2: Erstellen einer benutzerdefinierten SharePoint-Liste**

Der zweite Schritt ist die Erstellung einer benutzerdefinierten SharePoint-Liste mit zwei Feldern vom Typ *Single line of text*.  
1. Customer Name
2. Customer

**Schritt 3: Definieren Sie die Controls in Nintex Form**.

In unserer Nintex-Form benötigen wir zwei Controls:

1. Das erste Control mit dem Namen *Customer Name* ist vom Typ **Single Line Textbox**. Es ist das Eingabefeld für den Kundenname. Verbinden Sie das Steuerelement mit dem Listenfeld *Customer Name*. 
2. Das zweite Control mit dem Namen *Suggested Materials* ist vom Typ **Web Request**. Alle Treffer für den eingegebenen Kundennamen (Wildcards werden akzeptiert) sollen hier angezeigt und in der Dropdown-Liste wählbar sein. 

**Schritt 4: Konfigurieren Sie den Web Request**.

- Verbinden Sie den Text mit dem SharePoint-Listenfeld *Customer*.
- Wählen Sie *Dropdown-Liste* als Anzeigeformat. 
- Geben Sie die Webservice-URL ohne den */mex*-Teil im Feld *Service-URL* ein.
- Wählen Sie *POST* als Authentifizierungsmethode. 

![nintex-forms-webrequest-03](/img/content/nintex-forms-webrequest-03.png){:class="img-responsive"}

- Definieren Sie den Request Body.

Für SOAP-Webservice-Aufrufe muss ein sogenannter SOAP envelope erstellt werden. Für dieses Beispiel muss der Request Body im folgenden Format vorliegen:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.theobald-software.com/ERPConnectServices/WebServices">
<soapenv:Header/>
<soapenv:Body>
<web:GetSAPCustomers>
<web:CustomerName> 
</web:CustomerName>
</web:GetSAPCustomers>
</soapenv:Body>
</soapenv:Envelope> 
```

Vergessen Sie nicht, das Listenfeld *Customer Name* als Importparameter auf den Request Body zu mappen. 

![nintex-forms-webrequest-04](/img/content/nintex-forms-webrequest-04.png){:class="img-responsive"}


Für eine detailliertere Erklärung des Aufbaus des SOAP envelopes siehe folgenden Screenshot aus einem REST-Client:

![nintex-forms-webrequest-01](/img/content/nintex-forms-webrequest-01.png){:class="img-responsive"}

- Verwenden Sie *text/xml; charset=UTF-8* als Content Type.
- Wählen Sie den Authentifizierungstyp aus. In diesem Beispiel verwenden wir *Windows Authentication*.
- Geben Sie die Target-ID des Secure Store ein, in dem die Windows-Anmeldeinformationen gespeichert sind. 
- Geben Sie die XPath-Expression für den Wert ein, der abgerufen und angezeigt werden soll. In unserem Beispiel ist es *///*[local-name()='NAME1']* für beide Felder.
- Geben Sie im Abschnitt *Advanced* einen benutzerdefinierten Header für SOAPAction ein:

Name: SOAPAction <br>> 
Wert: http://www.theobald-software.com/ERPConnectServices/WebServices/ISAPCustomerWebservice/GetSAPCustomers 

![nintex-forms-webrequest-05](/img/content/nintex-forms-webrequest-05.png){:class="img-responsive"}

Für eine detailliertere Erklärung des Aufbaus des SOAPAction-Headers siehe folgenden Screenshot aus einem REST-Client:

![nintex-forms-webrequest-02](/img/content/nintex-forms-webrequest-02.png){:class="img-responsive"}

**Schritt 5: Testen Sie den Web Request**.

Sie können die Anfrage zunächst mit der Schaltfläche *Run now* testen. Achten Sie darauf, dass der Request Body korrekt eingegeben wird, es kann zu Zeilenumbrüchen, Leerzeichen usw. kommen, die den korrekten Aufruf verhindern.
Wenn es in der Vorschau korrekt funktioniert, speichern Sie die Einträge und veröffentlichen Sie die Form. Sie können die Form öffnen und testen, indem Sie ein neues Element in der SharePoint-Liste anlegen. 


![nintex-forms-js-dropdown-09](/img/content/nintex-forms-webrequest-gif.gif){:class="img-responsive"} 
