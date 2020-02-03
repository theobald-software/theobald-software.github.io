---
ref: ecs-read-write-access-01
layout: page
title: SAP Objekte
description: SAP Objekte
product: erpconnect-services
parent: bcs-schreib-lese-zugriff
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-sap-objekte
---

Eine Voraussetzung und der erste Schritt für die Erstellung einer CRUD Anwendung ist die Identifizierung der Business Entität und der Funktionsbausteine im SAP System, die die CRUD Methoden unterstützen.

Dieses Beispiel zeigt, wie sie durch den Einsatz von gut strukturierten, benutzerdefinierten SAP Funktionsbausteinen vollen Zugriff auf die SAP Daten erhalten.

Das SAP-Business-Objekt, das in diesem Beispiel verwendet wird, ist eine Produkt (oder Material) Entität, die in einer benutzerdefinierten Tabelle 'ZECSPRODUCTS' gespeichert ist.

![BCS-CRUD-SAP-Tables-ZECSPRODUCTS](/img/content/BCS-CRUD-SAP-Tables-ZECSPRODUCTS.png){:class="img-responsive"}

Die benutzerdefinierte SAP Tabelle hat die folgende Datenstruktur:

| Feld      | Key | Daten Element (Länge) | Beschreibung                     |
|-----------|-----|-----------------------|----------------------------------|
| MANDT     | X   | CLNT (3)              | Mandant                          |
| PRODUCTNR | X   | CHAR (18)             | Material Nummer                  |
| DESCTEXT  |     | CHAR (40)             | Material Beschreibung (Kurztext) |
| PRODTYPE  |     | CHAR (4)              | Material Typ                     |
| STOCKQUAN |     | QUAN (13)             | Bewerteter, freier Bestand       |
| MEINS     |     | UNIT (3)              | Basis Mengeneinheit              |

Der Zugriff auf die Tabelle wird durch kundenspezifische Funktionsbausteine, welche die CRUD-Methoden unterstützen, zur Verfügung gestellt.


**Z_ECS_PRODUCT_GET_LIST**

Dieser Funktionsbaustein gibt eine Liste von Datensätzen aus der Tabelle 'ZECSPRODUCTS' zurück und wird mit der Finder Methode des BCS gemappt.

Der Funktionsbaustein hat zwei Eingabeparameter: 'SEARCH_PRODUCTNR', um einen Wert für die Suche nach der Materialnummer und 'SEARCH_PRODTYPE' um einen Wert für die Suche nach dem Produkttyp anzugeben. Der Funktionsbaustein enthält die Tabellenstruktur 'T_PRODUCTS', die sämtliche Datensätze beinhaltet, die den Suchkriterien entsprechen, als Ergebnistabelle.

![BCS-CRUD-SAP-FM-GETLIST](/img/content/BCS-CRUD-SAP-FM-GETLIST.png){:class="img-responsive"}

Z_ECS_PRODUCT_GET_DETAIL

Dieser Funktionsbaustein gibt die Detailinformationen für ein Produkt in Form der Tabelle 'ZECSPRODUCTS' zurück und wird mit der *Specific Finder* Methode im BCS gemappt.

Der Funktionsbaustein besitzt einen Importparameter 'I_PRODUCTNR', der einen einzelnen Datensatz in der Tabelle definiert. Der Funktionsbaustein beinhaltet eine Tabellenstruktur 'T_PRODUCTS', der eine Ergebnistabelle mit einem einzelnen Datensatz beinhaltet.

![BCS-CRUD-SAP-FM-GETDETAIL](/img/content/BCS-CRUD-SAP-FM-GETDETAIL.png){:class="img-responsive"}

**Z_ECS_PRODUCT_CREATE**

Dieser Funktionsbaustein fügt einen neuen Datensatz in die Tabelle 'ZECSPRODUCTS' ein und wird mit der Creator Methode im BCS gemappt.

Der Funktionsbaustein hat einen Eingabeparameter 'I_PRODUCT, der die Struktur des neuen Datensatzes enthält.

![BCS-CRUD-SAP-FM-CREATE](/img/content/BCS-CRUD-SAP-FM-CREATE.png){:class="img-responsive"}

**Z_ECS_PRODUCT_ CHANGE**

Dieser Funktionsbaustein ändert die Details eines Produktdatensatzes in der Tabelle 'ZECSPRODUCTS' und wird mit der *Updater* Methode im BCS gemappt.

Dieser Funktionsbaustein hat zwei Importparameter: 'I_PRODUCTNR', der den zu ändernden Datensatz indentifiziert und 'I_PRODUCT' der die Daten für die Änderungen beinhaltet.

![BCS-CRUD-SAP-FM-CHANGE](/img/content/BCS-CRUD-SAP-FM-CHANGE.png){:class="img-responsive"}

**Z_ECS_PRODUCT_DELETE**

Dieser Funktionsbaustein löscht einen Datensatz innerhalb der Tabelle 'ZECSPRODUCTS' und wird mit der *Deleter* Methode im BCS gemappt.

Der Funktionsbaustein hat einen Eingabeparameter 'I_PRODUCTNR', der das zu löschende Produkt definiert.

![BCS-CRUD-SAP-FM-DELETE](/img/content/BCS-CRUD-SAP-FM-DELETE.png){:class="img-responsive"}
