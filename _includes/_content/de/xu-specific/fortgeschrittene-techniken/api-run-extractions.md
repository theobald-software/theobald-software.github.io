

### Extraktionen ausführen

```
[protocol]://[host]:[port]/run/[extraction_name]
```

Führt die angegebene Extraktion aus und wartet darauf, dass der Prozess angeschlossen ist.
\* Dieser Endpunkt ist als veraltet markiert und wird in Zukunft durch `/run/[extraction_name]` ersetzt. \*

```
[protocol]://[host]:[port]/start/[extraction_name]
```
Führt die angegebene Extraktion asynchron aus und gibt den Ausführungsstatus sofort zurück.

{: .box-warning }
**Warnung! Veraltete Endpunkte:**<br>
`[protocol]://[host]:[port]/?name=[extraction_name]` (synchron) <br>
`[protocol]://[host]:[port]/?name=[extraction_name]&wait=false` (asynchron) 

{: .box-tip }
**Tipp:** Sie können die Benutzeroberfläche im Menü "Run Extraction" verwenden, um eine URL für das Ausführen einer Extraktion zu generieren, siehe {% if page.parent == "xtract-universal" %}[Extraktion ausführen](./erste-schritte/eine-extraktion-ausfuehren#extraktion-ausführen).{% else %}[Extraktion ausführen](./erste-schritte/eine-extraktion-ausfuehren).{% endif %}


#### Response

Die Antwort eines Webservice-Aufrufs enthält die folgenden Informationen:

|     | Antwort | Beschreibung | 
|-----|-----------|--------------|
| (1) | HTTP Statuscode | Der HTTP-Statuscode *200* zeigt einen erfolgreichen Extraktionsaufruf an. Dies weist nicht auf eine erfolgreiche Ausführung der Extraktion hin. <br> Der HTTP-Statuscode *404* zeigt an, dass die aufgerufene Extraktion nicht existiert. Detaillierte Informationen finden Sie im Protokoll des Webservices. | 
| (2) |HTTP-Header | Zeigt den Zeitstempel der Extraktion im HTTP-Header an, z. B., X-XU-Timestamp: *2021-04-09_19:03:09.971* | 
| (3) | HTTP Response-Body | Die Antwort im HTTP-Body hängt vom Typ der Destination der Extraktion ab. | 

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

#### Parameter

`[protocol]://[host]:[port]/?name=[extraction_name]`

| Parameter    | Beschreibung  | 
|-----------|--------------|
| ```&[parameter1_name]=[value]```  |   Führt die angegebene Extraktion aus und übergibt Werte an die angegebenen {% if page.product == "xtract-universal" %}[Extraktionsparameter](./extraktionen-ausfuehren-und-einplanen/extraktionsparameter).{% else %}[Extraktionsparameter](./erste-schritte/eine-extraktion-ausfuehren#definieren-der-extraktionseigenschaften).{% endif %} |
| ```&quiet-push=true```  |   Führt die angegebene Extraktion aus und unterdrückt die Ausgabe von Extraktionsprotokollen für Push-Destinationen. Dieser Parameter hat keine Auswirkung auf Pull-Destinationen und asynchrone Extraktionen.|
| ```&wait=false``` |   Führt die angegebene Extraktion asynchron aus und gibt den Zeitstempel im HTTP-Body zurück. Standardmäßig (true) wartet, bis die Extraktion abgeschlossen ist. \* Dieser Endpunkt ist als veraltet markiert und wird durch `/start/[extraction_name]` ersetzt. \*|

{: .box-tip }
**Tipp:** Sie können die Benutzeroberfläche im Menu "Run Extraction" verwenden, um eine URL für Extraktionsläufe zu generieren, siehe [Extraktion ausführen](./erste-schritte/eine-extraktion-ausfuehren).


#### Example 

`http://sherri.theobald.local:8065/?name=KNA1&wait=false&city=Stuttgart&name1=Theobald%20Software`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
KUNNR,LAND1,NAME1,ORT01,Mean_UMSAT
0000000779,DE,Theobald Software,Stuttgart,"0,00000000000000000E+000"
{% endhighlight %}
</details>


### Extraktion abbrechen

```
[protocol]://[host]:[port]/abort?name=[extraction_name]
```  

Bricht die angegebene Extraktion ab.
Bei erfolgreichem Abbruch wird im HTTP-Body eine Bestätigungsmeldung zurückgegeben.

\* Dieser Endpunkt ist als veraltet markiert und wird durch `/stop/[extraction_name]` ersetzt. \*

#### Beispiel

`http://sherri.theobald.local:8065//abort?name=KNA1`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
All runs of extraction 'KNA1' aborted.
{% endhighlight %}
</details>
