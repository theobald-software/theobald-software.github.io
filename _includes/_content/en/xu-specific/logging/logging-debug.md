All Theobald Software products log all steps performed on a system to log files.
In case of debugging faulty behavior, Theobald support team may ask to hand over tracing information.

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary, e.g., upon request of the support team.

### Activating tracing

1. In the main window of the Designer, navigate to the menu bar and select the menu item **Server > Manage Sources**.<br>
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}<br>
The window "Manage Sources" opens. <br> 
2. Select the SAP source of your faulty extraction and click **[Edit]** (pencil symbol). The window "Manage Sources
![sap-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Under subsection **Miscellaneous** click **[...]** in the field 'Trace directory'.
![tracing-path](/img/content/xu_tracing_path.png)
4. Create a new folder for storing tracing files e.g., `C:\trace` (1).
{:class="img-responsive"}
5. Click **[OK]** to confirm.
6. Reproduce the error. <br> XML files with the tracing information are created in the folder `C:\trace`.
7. Compress the folder to a zip file (e.g., Trace.zip) and send the zip file to Theobald support team (support@theobald-software.com).
8. Reopen the window "Source Details" and delete the entry in the field **Trace directory** (1).
![tracing-path](/img/content/xu_tracing_path.png)





