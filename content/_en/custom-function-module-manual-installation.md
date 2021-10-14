---
layout: page
title: Manual Installation of Custom Function Modules
description: Manual Installation of Custom Function Modules
permalink: /:collection/:path
weight: 11
lang: en_EN
---


This article shows how to manually install the function modules Z_THEO_READ_TABLE (version 2.0 and newer) and Z_XTRACT_IS_REMOTE_REPORT in your SAP system. 

{: .box-note }
**Note:** For more information on custom function modules and transport requests, refer to the [Online Help](https://help.theobald-software.com/en/xtract-universal/sap-customizing).

### Installation of the Function Module Z_THEO_READ_TABLE

Z_THEO_READ_TABLE (version 2.0 and newer) consists in total of 13 development objects: <br>
- **Package (1):** 
	- *Z_THEO_READ_TABLE*
- **Function group (1):** 
	- *Z_THEO_READ_TABLE*
- **Structures (3):** 
	- *ZTHEOJOBS*<br>
	- *ZTHEOTABLEFIELDS*<br>
	- *ZTHEOTABLEJOINDEF*<br>
- **Classes (5):** 
	- *ZCL_THEO_EXCEPTION* <br>
	- *ZCL_THEO_READ_TABLE_ENGINE*<br>
	- *ZCL_THEO_READ_TABLE_SHM_ROOT* <br>
	- *ZCL_THEO_SHM_AREA*<br>
	- *ZCL_THEO_SHM_MANAGER*<br>
- **Interface (1):** 
	- *ZIF_THEO_STATUS*
- **Program (1):** 
	- *Z_THEO_READ_TABLE_JOB*
- **Function Module (1):** 
	- *Z_THEO_READ_TABLE*

#### General Information

1. This article assumes basic understanding of creating ABAP DDIC objects.
2. All classes and interfaces should be created in class editor in **source code-based view**.
3. All classes should have following settings:
![Class-Settings](/img/contents/READ_TABLE_class-settings.jpg){:class="img-responsive" }
4. Warnings that occur when creating classes can be ignored.
5. The definitions of required structures, as well as the source code of all the classes, interfaces, 
programs and function modules can be found in `Z_THEO_READ_TABLE-source.zip` file. The zip file is provided by Theobald Software upon request. 
All objects need to be created within the *Z_THEO_READ_TABLE development package* and should not be renamed.
6. All but one of the required objects can be created in object navigator (transaction code SE80). 
The only exception is the shared memory area class *ZCL_THEO_SHM_AREA*, which is created in *Shared Objects Area Management* (transaction code SHMA). 

#### Installation

**Package:** <br>
Create a *Z_THEO_READ_TABLE* development package.

**Function Group:** <br> 
Create a *Z_THEO_READ_TABLE* function group inside of *Z_THEO_READ_TABLE* package

**DDIC Objects:** <br>
In order to avoid “Object Missing” errors when activating the created objects, the following DDIC 
objects need to be created AND activated in Z_THEO_READ_TABLE package in this exact order:
1. ZIF_THEO_STATUS (Interface)
2. ZTHEOTABLEJOINDEF (Structure)
3. ZTHEOTABLEFIELDS (Structure)
4. ZCL_THEO_EXCEPTION (Class)
5. ZCL_THEO_READ_TABLE_ENGINE (Class)
6. ZTHEOJOBS (Structure)

**Shared Memory Area and Root Class:** <br> 
Create the shared memory area and the shared memory root class:
1. Open transaction SHMA
2. Fill in the input fields as shown in the screenshot below:
![Class-Settings](/img/contents/READ_TABLE_root-class.jpg){:class="img-responsive" }
3. After inputing the name of the root class, you will be prompted with a message that *ZCL_THEO_READ_TABLE_SHM_ROOT* does not exist and whether you want to create it now. Press **[Yes]**.
4. After you input the class properties in the dialog and confirm it, the class editor will open.
5. Switch to source code-based view and copy the source code of *ZCL_THEO_READ_TABLE_SHM_ROOT* into the editor, save it and activate the class. 
You will be notified that *ZCL_THEO_SHM_AREA* class does not exist. Ignore the warning and activate the class regardless.
6. After the root class has been created and activated, activate the shared memory area *ZCL_THEO_SHM_AREA*.

#### Finishing Up
After the objects from previous steps have been created and activated, create and activate the following objects in this exact order:
1. *ZCL_THEO_SHM_MANAGER* (Class)
2. *Z_THEO_READ_TABLE* (Function Module)<br>
This function module needs to be remote enabled.<br>
IMPORT, TABLE and EXCEPTION parameters need to be added manually. These can be found in the local interface definition comment in the source code of the function module.<br>
TABLE parameters need to have LIKE typing. Using LIKE typing will generate a warning that can be ignored.
3. *Z_THEO_READ_TABLE_JOB* (Report)<br>
The type of this report needs to be ‘executable program’.

Should you have encountered any issues or questions, please contact us at [Theobald Support](mailto:support@theobald-software.com).

### Installation of the Function Module Z_XTRACT_IS_REMOTE_REPORT 

The source code required for the installation is provided by Theobald Software upon request.

1. Create the structure ZTAB1024, see *Z_XTRACT_IS_REMOTE_REPORT - ZTAB1024* for details.
2. Create a new function module in SAP:<br> 
Call transaction SE37 and create a new function module named "Z_XTRACT_IS_REMOTE_REPORT". You can use an existing function group or create a new one. 
This is also valid for the development class (Package).<br> 
3. In the tab *Attributes* check *Remote Enabled*. 
![Report_function_attributes](/img/contents/report_function_attributes.png){:class="img-responsive"}
4. Define the following import parameters:
![Report_function_import](/img/contents/report_function_import.png){:class="img-responsive"}
5. Define the following export parameters:
![Report_function_export](/img/contents/report_function_export.png){:class="img-responsive"}
6. Define the following tables parameters:
![Report_function_tables](/img/contents/report_function_tables.png){:class="img-responsive"}
7. Define the following exceptions:
![Report_function_exceptions](/img/contents/report_function_exceptions.png){:class="img-responsive"}
8. Use **[Ctrl + C]** and **[Ctrl + V]** to paste the ABAP source code *Z_XTRACT_IS_REMOTE_REPORT* into the source code editor.
9. Save the function module and activate it.

{: .box-tip }
**Tip:** The functionality of the module Z_XTRACT_IS_REMOTE_REPORT can be understood from reading the source code. All steps for execution, job monitoring and spool retrieval are commented in the source code.

