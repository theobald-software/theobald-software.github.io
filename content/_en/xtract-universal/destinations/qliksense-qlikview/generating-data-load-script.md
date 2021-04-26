---
ref: xu-qliksense-qlikview-04
layout: page
title: Generating data load script
description: Generating data load script
product: xtract-universal
parent: qliksense-qlikview
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=generating_data_load_script
---
### Displaying the Qlik Data Load Script
1. Run an extraction with a "Qlik" destination. The window "Run Extraction" opens.
![XU_qlik_generate_Script](/img/content/xu/XU_qlik_generate_Script.png){:class="img-responsive"}
2. *Optional (when using QlikSense)*: In the *Parameters* section, mark the check boxes for the parameters which you wish to add as SET variables in the QlikSense script.
3. Click **[Generate Qlik Script]** to generate a data load script. The window "Script" opens.

### Further Processing of the Script
1. Select the *QlikView Script* or *QlikSense Script* tab.
2. Click **[Copy to Clipboard]** to copy the script.
![XU_qlik_generate_Script](/img/content/XU_qlik_generate_Script_2.png){:class="img-responsive"}
3. When using QlikView, paste the copied script into the QlikView data load editor. For QlikSense, see section [Settings in QlikSense](./settings-in-qlik-sense).

{: .box-note }
**Note:** The "SET methods" cannot be edited in the "Script" window. Edit the SET methods in the Qlik data load editor. 


****
#### Related Links

- [Qlik Help](https://help.qlik.com/)

