### Look up an OHS
1. Click **[Search]** (binoculars icon) in the main window of the component.
The dialog "Look Up Infospoke/Destination" opens.
![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}

2. You can search either according to **InfoSpoke**, **Destination** or **Process Chain**. You can also use wildcards ( * ) in your search.

{:.box-warning}
**Caution!**<br> You can only select a process chain that contains an InfoSpoke.

3. Click **[OK]** to confirm.
All metadata are retrieved from the BW and displayed in the editor.
![Open-Hub-Service-Data-Source](/img/content/Open-Hub-Service-Data-Source.png){:class="img-responsive"}

The Execution Mode can have one of the following values: 

**P - Trigger Process Chain**<br>
The specified process chain will be started, the extraction is made and after ending the extraction, data is extracted in packages.

**E – Extract Only**<br>
A process chain will not be started. The Request ID entered in the field Request ID is used to retrieve data of the respective request.
Only data of the last DTP request of that OHS Destination can be extracted. Data of previous requests can not be extracted.



