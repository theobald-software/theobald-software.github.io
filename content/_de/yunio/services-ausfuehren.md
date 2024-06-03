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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für yunIO.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für yunIO](https://helpcenter.theobald-software.com/yunio/).


Der folgende Abschnitt zeigt, wie Sie in yunIO erstellte Services testen, integrieren und Parameter übergeben können.

### Service Testen

Vor der Integration eines yunIO-Services empfiehlt es sich, den Service direkt in yunIO oder in einem REST-Client Ihrer Wahl zu testen.
- Klicken Sie auf ![copy](/img/content/yunio/icons/copyURL.png) um die URL des Service-Eendpunkts in Ihre Zwischenablage zu kopieren. <br>
Die URL kann zum Triggern eines Service-Laufs verwendet werden.
- Klicken Sie auf ![copy](/img/content/yunio/icons/run.png), um *Run Service* Menu zu öffnen. <br>
Hier können Sie Parameter definieren und den Service direkt in yunIO ausführen.<br>
![yunIO-Services](/img/content/yunio/yunio-run-services1.png){:class="img-responsive" }

#### Service Menü Ausführen

Führen Sie die folgenden Schritte aus, um einen Service zu testen:
1. Wenn [Globale Zugriffskontrolle - Global Access Control](./Zugriffssteuerung#global-access-control-globale-zugriffssteuerung) und / oder [Service-Zugriffskontrolle - Service Access Control](./Zugriffssteuerung#service-access-control-zugriffssteuerung-für-services) aktiviert ist, geben Sie gültige Anmeldeinformationen ein (1).
2. Wenn der Service Eingabeparameter erfordert, geben Sie Werte für die unter *Service parameters* (2) aufgeführten Parameter ein.
Das dargestellte Beispiel verwendet einen Eingabeparameter *NAME1*.<br>
![Run-Service](/img/content/yunio/run-service.png){:class="img-responsive" }
3. Klicken Sie auf **[Run]**. Das Response-Body (Antworttext) des Service wird unter *Output Parameters*(3) angezeigt.<br>
Wenn der Service mehrere Elemente zurückgibt, erweitern Sie die Elemente, um den Inhalt anzuzeigen, oder verwenden Sie die Kontrollschaltflächen, um die Anzeige der Parameter anzupassen.<br>
Wenn das Response-Body eine Fehlermeldung zurückgibt, klicken Sie auf **[Logs]**, um die [Logs](./logs) des Service-Laufs zu öffnen.
4. Klicken Sie auf **[Close]**, um das *Run Service* Menü zu schließen.


{: .box-tip}
**Tipp:** Klicken Sie auf **[Edit]**, um den Service zu bearbeiten oder Parameter hinzuzufügen.

#### Kontrollschaltfächen

Die Kontrollschaltflächen im Menü *Run Service* regulieren die Anzeige der Ein-und Ausgabeparameter.

- [![collapse](/img/content/yunio/icons/run-collapse.svg){:class="img-responsive" style="display:inline" width="20px"}] Klappt alle Parameterelemente zusammen.
- ![expand](/img/content/yunio/icons/run-expand.svg){:class="img-responsive" style="display:inline" width="20px"} erweitert alle Parameterelemente.
- ![download](/img/content/yunio/icons/run-download.svg){:class="img-responsive" style="display:inline" width="20px"} speichert alle eingegebenen Parameter in einer .json-Datei. Die Datei kann zum Neuladen der Parameterwerte oder zum Teilen von Werten mit anderen yunIO-Instanzen verwendet werden.
- ![upload](/img/content/yunio/icons/run-upload.svg){:class="img-responsive" style="display:inline" width="20px"} lädt Parameterwerte aus einer lokalen .json-Datei hoch. Die JSON-Datei kann mit der ![Download-Scahltfläche](/img/content/yunio/icons/run-download.svg){:class="img-responsive" style="display:inline" width="20px"} erstellt werden.
- ![reset](/img/content/yunio/icons/run-reset.svg){:class="img-responsive" style="display:inline" width="20px"} entfernt alle definierten Eingabeparameter. Diese Option ist nur für Eingabeparameter verfügbar.
- ![fullscreen](/img/content/yunio/icons/run-fullscreen.svg){:class="img-responsive" style="display:inline" width="20px"} zeigt die Parameter in einer Vollbildansicht an. Um die Vollbildansicht zu schließen, klicken Sie auf **[ X ]**.


### Integration eines Services

Mit yunIO erstellte Webservices können in alle Cloud-Anwendungen integriert werden, die REST API/Swagger (OpenAPI) unterstützen, z.B. Power Automate, Nintex usw.

- Klicken Sie auf ![copy](/img/content/yunio/icons/copyURL.png), um die URL der Service-Definition in Ihre Zwischenablage zu kopieren.<br>
Die Servicedefinitions-URL kann von Drittanbieter-Tools verwendet werden, um die Metadaten des Service zu laden.
- Klicken Sie auf ![download](/img/content/yunio/icons/download.png) um die Service-Definition herunterzuladen.<br>
Die Service-Definition wird als JSON-Datei gespeichert, die definiert wie der Service ausgeführt wird. 
Die JSON-Datei kann in Drittanbieter-Tools impotiert werden.<br>
![yunIO-Services](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive" }

Beispiele für die Integration von yunIO-Services in Drittanbieter-Tools:
- [yunIO Service mit Power Automate intergrieren](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
- [yunIO Service mit Nintex integrieren](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex)
- [yunIO Service mit Alteryx integrieren](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-alteryx)

Für mehr Integrationszenarien und Beispiele, siehe [Integrationszenarien](./integration). 

<!---
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub)
-->

### Übergabe von Parametern

Welche Parameter an einen YunIO-Service übergeben werden, hängt von der http-Methode ab, die zum Aufrufen des Services verwendet wird.<br>
yunIO unterstützt die http-Methoden `POST` und `GET`, siehe [POST vs GET](#post-vs-get).

#### POST Method
Parameter werden im Anforderungstext eines Services aufgelistet. <br>
Bearbeiten Sie den Anforderungstext, um den Parametern Werte zuzuweisen. Das dargestellte Beispiel verwendet einen Eingabeparameter *NAME1*:<br>
![yunIO-HTTP-POST](/img/content/yunio/http-post.png){:class="img-responsive" }

#### GET Method
Parameter stehen als Abfrageparameter in der Service-URL zur Verfügung. <br>
Verwenden Sie Abfrageparameter, um Werte zuzuweisen, oder fügen Sie die Werte direkt in der Service-URL hinzu. Das dargestellte Beispiel verwendet einen Eingabeparameter *NAME1*:<br>
![yunIO-HTTP-GET](/img/content/yunio/http-get.png){:class="img-responsive" }

{: .box-note}
**Hinweis:** Wenn URL-Parameter andere Zeichen enthalten als `A–Z a–z 0–9 - _ . ! ~ * ' ( )`, verwenden Sie für diese Zeichen eine Escape-Sequenz. 
Nicht zulässige Zeichen sind z.B. `# % &`.


### POST vs GET
yunIO-Services unterstützen die http-Methoden „POST“ und „GET“.

|  | POST | GET |
|--|-----|------|
| Datenlänge | Keine Einschränkungen. | Die maximale URL-Länge beträgt 2048 Zeichen. |
| Parameter | Parameter sind Teil des HTTP-Anfragetexts. | Unterstützt Abfrageparameter in der URL. |
| Datensicherheit | Parameter werden nicht im Browserverlauf oder in Webserverprotokollen gespeichert. | Parameter sind in der Service-URL sichtbar. Daten werden zwischengespeichert. |
| Datentypen | Keine Einschränkungen. | Unterstützt nur ASCII-Zeichen. |

{: .box-tip}
**Empfehlung:** Wir empfehlen die Verwendung der POST-Methode mit [Transport Layer Security](./server-settings) (HTTPS), um den Datenschutz zu gewährleisten.
Verwenden Sie die GET-Methode nicht zum Senden sensibler Daten, z. B. Referenzen.

Bei Verwendung der OpenAPI/Swagger-Definition sind sowohl „POST“ als auch „GET“ verfügbar. Wählen Sie die Methode aus, die Sie verwenden möchten:<br>
![yunIO-HTTP-POST-GET](/img/content/yunio/http-post-get.png){:class="img-responsive" }


*****
#### Weiterführende Links
- [SAP Table or Views](./table-and-views)
- [Function Module / BAPI](./bapis-and-function-modules)
- [Transactions](./transactions)
- [Report](./report)