All Theobald Software products log all steps performed on a system to log files.
In case of debugging faulty behavior, Theobald support team may ask to hand over tracing information.

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary, e.g., upon request of the support team.

### Activating tracing

1. Within the Designer, open "Manage Sources" window by selecting **[Server > Manage Sources]**. 
2. Select the SAP source of your faulty extraction and click **[Edit]** (pencil symbol).
![sap-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Under subsection **Miscellaneous** click **[...]** in the field 'Trace directory'.
4. Create a new folder where to store tracing files e.g., `C:\trace` (1).
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}
5. Confirm by clicking **[OK]**.
6. Reproduce the error. 
XML Files are created in the folder `C:\trace` with the tracing information.
7. Compress the folder to a zip file (e.g. Trace.zip) and sent it to our support departmnent (support@theobald-software.com).
8. Delete the entry in the field 'Trace directory'





