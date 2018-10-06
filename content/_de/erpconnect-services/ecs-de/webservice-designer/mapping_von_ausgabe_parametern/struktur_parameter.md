---
layout: page
title: Struktur-Parameter
description: Struktur-Parameter
product: erpconnect-services
parent: mapping_von_ausgabe_parametern
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=struktur_parameter
---

**Struktur-Parameter auf eine Struktur mappen**

Im folgenden Beispiel zeigen wir Ihnen, wie Sie Struktur-Parameter eines Funktionsbausteins auf eine Ausgabe-Struktur einer Webservice-Operation mappen können. 

Als Anwendungsbeispiel dient uns der Funktionsbaustein BAPI_COMPANYCODE_GETDETAIL.<br>
Dieser Funktionsbaustein liest Firmeninformationen zu einem bestimmten Buchungskreis aus und listet die Ergebnisse in mehreren Struktur-Parametern wie z.B. *COMPANYCODE_DETAIL auf*.  <br>
Ziel in diesem Szenario ist es, die Felder COMP, COMP_NAME und CITY aus dem Struktur-Parameter COMPANYCODE_DETAIL auf die entsprechenden Elemente des Struktur-Parameter CompanyDetails der WebService-Operation zu mappen.  

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_COMPANYCODE_GETDETAIL aufruft und kehren Sie zur Übersichtsseite zurück.<br>
Legen Sie zunächst unter *Custom Data Types* den Datentyp *CompanyDetails* an, der die Datenelemente Name, City und CompanyCode enthält.

![WSD-MappingStructureMappingOutput1](/img/content/WSD-MappingStructureMappingOutput1.png){:class="img-responsive"}

Legen Sie anschließend den Output-Parameter *Details* an, der als Datentyp die angelegte Struktur *CompanyDetails* enthält.

![WSD-MappingStructureMappingOutput2](/img/content/WSD-MappingStructureMappingOutput2.png){:class="img-responsive"}

Rufen Sie danach den Aktivitätsdialog auf und scrollen dort herunter zum Outputparameter COMPANYCODE_DETAIL, um das Mapping der Ausgabe-Struktur vorzunehmen. Wählen Sie in der Dropdown-Liste unter Mapping den Struktur-Parameter Details und rufen anschließend das Feld *Mapping Expression* auf. 

![WSD-MappingStructureMappingOutput4](/img/content/WSD-MappingStructureMappingOutput4.png){:class="img-responsive"}

Hier finden Sie in der Dropdown-Liste unter Mapping die Felder des Strukturparameters COMPANYCODE_DETAIL und können diese auf die Elemente *Name, City* und *CompanyCode* des Struktur-Parameters Details mappen. 

![WSD-MappingStructureMappingOutput5](/img/content/WSD-MappingStructureMappingOutput5.png){:class="img-responsive"}

Bestätigen Sie Ihre Eingaben mit OK. Das Mapping der Ausgabe-Parameter ist damit abgeschlossen.

**Skalare Parameter auf eine Struktur mappen**

Es ist nicht möglich, skalare Parameter eines Funktionsbausteines auf eine Ausgabestruktur einer Webservice-Operation zu mappen. Verwenden Sie für das Mapping skalare Parameter in der Webservice-Operation.