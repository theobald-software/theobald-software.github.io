
### Run Extractions

```
[protocol]://[host]:[port]/run/[extraction_name]
```

Runs the specified extraction and waits for it to finish.

```
[protocol]://[host]:[port]/start/[extraction_name]
```

Runs the specified extraction asynchronously and returns the run status immediately.

{: .box-warning }
**Warning! Deprecated Endpoints:**<br>
`[protocol]://[host]:[port]/?name=[extraction_name]` (synchronous) <br>
`[protocol]://[host]:[port]/?name=[extraction_name]&wait=false` (asynchronous) 

{: .box-tip }
**Tip:** You can use the UI in the "Run Extraction" menu to generate a URL for extraction runs, see {% if page.parent == "xtract-universal" %}[Run Extraction](./getting-started/run-an-extraction#run-extraction).{% else %}[Run Extraction](./getting-started/run-an-extraction).{% endif %}

#### Response

The response of the web service calls contains the following information:

|     | Response | Description | 
|-----|-----------|--------------|
| (1) | HTTP status code | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. <br> The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. | 
| (2) | HTTP header | Shows the timestamp of the extraction in the HTTP header e.g., X-XU-Timestamp: *2021-04-09_19:03:09.971* | 
| (3) | HTTP response body | The Response in the HTTP body depends on the destination type of the extraction. Depending on the destination type, the extracted data is returned in either CSV or JSON format. | 

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}


#### Parameters

`[protocol]://[host]:[port]/start/[extraction_name]`

| Parameter    | Description  | 
|-----------|--------------|
| ```/&[parameter1_name]=[value]```  |   Runs the specified extraction and passes values to the specified {% if page.product == "xtract-universal" %}[extraction parameters](./execute-and-automate-extractions/extraction-parameters).{% else %}[extraction parameters](./getting-started/run-an-extraction).{% endif %} |
| ```/&quiet-push=true```  |   Runs the specified extraction and suppresses the output of extraction logs for push destinations. This parameter has no effect on pull destinations and asynchronous extractions.|

#### Example 

`http://sherri.theobald.local:8065/start/KNA1/?name1=heobald%20Software&city=Stuttgart`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
KUNNR,LAND1,NAME1,ORT01
0000000779,DE,Theobald Software,Stuttgart
{% endhighlight %}
</details>


### Abort Extraction

<!---
```
[protocol]://[host]:[port]/stop
```  

Aborts all extractions. 
If the abortion is successful, a confirmation message is returned in the HTTP body. 

{: .box-warning }
**Warning! Deprecated Endpoint:**<br> 
`[protocol]://[host]:[port]/abort?name=[extraction_name]` 

#### Parameters

| Parameter    | Description  | 
|-----------|--------------|
| ```/[extraction_name]```  |   Aborts the specified extraction. |
| ```/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Aborts the extraction with the specified timestamp. |


#### Example

`http://sherri.theobald.local:8065/stop/KNA1`
-->

```
[protocol]://[host]:[port]/abort?name=[extraction_name]
```  

Aborts the specified extraction.
If the abortion is successful, a confirmation message is returned in the HTTP body. 

\* This endpoint is marked as deprecated and will be replaced by `/stop/[extraction_name]` in the future. \*

#### Example

`http://sherri.theobald.local:8065/abort?name=KNA1`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
All runs of extraction 'KNA1' aborted.
{% endhighlight %}
</details>

