RFC communication with SAP can be recorded by tracing for troubleshooting purposes.

Standard logging is always active and is independent of the tracing setting. 

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary, e.g., upon request of the support team.


### Activating tracing

1. In the main window of the Designer, navigate to the menu bar and select the menu item **Server > Manage Sources**. 
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}
The window "Manage Sources" opens. <br> 
2. Select the SAP source of your faulty extraction and click **[Edit]** (pencil symbol). 
![sap-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Under subsection **Miscellaneous** click **[...]**. The window "Browse For Folder" opens. 
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}
4. Click **[Make new Folder]** to create a new folder for storing tracing files, e.g., `C:\trace` (1). The created folder appears in the field **Trace directory**.
5. Click **[OK]** to confirm.
6. Reproduce the error. XML files with the tracing information are created in the folder `C:\trace`.
7. Compress the folder to a zip file (e.g., Trace.zip) and send the zip file to Theobald support team (https://support.theobald-software.com).
8. Reopen the window "Source Details" and delete the entry in the field **Trace directory** (1).
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}





