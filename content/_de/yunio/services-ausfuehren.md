---
ref: yunio-11
layout: page
title: Services Ausführen
description: Services Ausführen
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 11
lang: de_DE
---

Der folgende Abschnitt ...

### Einen Service ausführen

Mit yunIO erstellte Webservices sind in alle Cloud-Anwendungen integrierbar, die REST und Swagger/OpenAPI unterstützen, z.B. Power Automate, Nintex, uvm.

- Um einen Service zu testen, können Sie die URL des Service Endpoints unter **Service** (1) triggern.
Der Service wird dann direkt im Browser ausgeführt.<br>
- Um einen yunIO Webservice in ein Prozessautomatisierungstool zu integrieren, das Swagger/OpenAPI unterstützt, kopieren Sie den Code oder laden Sie die Definition des Services herunter (2).
![yunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }

{: .box-note}
**Hinweis:** Nur Services, die keine Eingangsparameter erfordern, zeigen SAP-Ergebnisse im Browser an. Verwenden Sie für parametrisierte Services ein Tool, das Swagger/OpenAPI-Definitionen unterstützt 
(z. B. [Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) oder [Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)).

### Einen Service im Browser Testen

### Services Integrieren

### Parameter Übergeben

### POST vs GET
yunIO Services unterstützen die HTTP-Methoden `POST` und `GET`.

|  | POST | GET |
|--|-----|------|
| Datenlänge| Keine Einschränkungen. | Maximuale Länge der URL ist 2048 Zeichen. |
| Parameter | Parameter sind Teil des HTTP Request Bodys. |Unterstützt Query-Parameter in der URL. | 
| Datensicherheit | Parameter werden nicht im Browserverlauf und den Server-Logs gespeichert. | Parameter sind in der URL offen sichtbar. Daten werden gecacht. | 
| Datentypen | Keine Einschränkungen.  | Unterstützt nur ASCII-Zeichen. |

{: .box-tip}
**Empfehlung:** Wir empfehlen die Verwendung der POST-Methode mit [Transport Layer Security]() (HTTPS), um Ihre Daten zu schützen. Verwenden Sie nicht die GET-Methode, wenn Sie sensible Daten übertragen, z.B. Zugangsdaten. 

Wenn Sie die OpenAPI/Swagger Definition verwenden, sind die Methoden `POST` und `GET` beide verfügbar. Sie können eine der beiden Methode auswählen:<br>
![yunIO-HTTP-POST-GET](/img/content/yunio/http-post-get.png){:class="img-responsive" }

Beispiel für die `POST`-Methode mit einem Eingabeparameter *NAME1*:<br>
![yunIO-HTTP-POST](/img/content/yunio/http-post.png){:class="img-responsive" }

Beispiel für die `GET`-Methode mit einem Eingabeparameter *NAME1*:<br>
![yunIO-HTTP-GET](/img/content/yunio/http-get.png){:class="img-responsive" }

*****
#### Weiterführende Links
- [SAP Tabelle oder Ansicht](./table-and-views)
- [Funktionsbaustein / BAPI](./bapis-and-function-modules)
- [Transaktionen](./transactions)
