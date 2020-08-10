---
ref: xu-introduction-04
layout: page
title: Backup and Migration
description: Backup and Migration
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 4
lang: en_GB
progressstate: 5
---

<!-- TOOD Better structure needed for explaining versions, backward compatiblity, etc. -->

### Backup

{: .box-tip }
**Recommendation:** Make sure to create *regular* backups of the configuration files to save the work invested in designing and optimizing your data extraction processes.

A backup allows you to easily switch back to the previous product version, if needed. See also section [Installation and Update](./installation-and-update).

### Configuration Files
All configuration files of extractions, sources, destinations and the server are stored in the sub-directory `config` of the Xtract Universal program directory. <br>

`C:\Program Files\XtractUniversal\config` by default.

|Filename      | Description                                                                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`destinations`|Directory containing the [destinations](../xu-destinations). Each `.json` file contains a destination of the same name.                                       |
|`extractions` |Directory containing the [extractions](../getting-started-xu/define-a-table-extraction). Each sub-directory contains an extraction of the same name.          |
|`server`      |Directory containing the [server settings](../server/server-settings).                                                                                        |
|`sources`     |Directory containing [SAP connections](./sap-connection). Each sub-directory contains a source of the same name.                                              |
|`version.txt` |Text file containing the product version of the current configuration. See also [New Installation and Update](./installation-and-update#new-installation-and-update).|

### How do I Create a Backup?
Copy the complete `config` directory (`C:\Program Files\XtractUniversal\config` by default) of the machine running the Xtract Universal Service and store the files in safe and secure locations.
Optionally, copy the complete `logs` directory (`C:\Program Files\XtractUniversal\logs` by default) to create a backup of the log files.

{: .box-warning }
**Warning!** <br>
**Data security**. Both `config` and `logs` directories may contain sensitive information.


<!-- TODO How to restore a backup-->
<!-- TODO explain how to enable version control by using git, mercurial, svn, etc. in the config dir -->

### Migration to a Different Machine
Configuration files can be migrated partially or entirely (full migration).
<!-- TODO explain typical scenarios, e. g. from test to prod, replacing a machine entirely -->

**Prerequisite**: Xtract Universal versions installed on both machines match.

{: .box-tip }
**Tip**: To check the version of your product, open the Designer, navigate to **Help > Info** or press **[F12]**.

{: .box-note }
**Note:** Install the matching version on the different machine by using the `XtractUniversalSetup.exe` from the program directory (`C:\Program Files\XtractUniversal` by default) of the current machine.

<!-- TODO why so many differnt visual styles (prerequisite, tips, and step 1) all refering to matching versions? -->
<!--Voraussetzung: gleiche Verison. Tip wie man eigene Version rausfindet und tip, woher man die aktuelle Version kriegt--->

1. Create a backup of the `config` directory of the current machine.
2. Decide whether you need a partial or a full migration. <br> 
For a full migration you can restore the entire `config` directory on the different machine.
You can alternatively restore parts of the backup, by copying e.g., only the destinations or extractions directories.
3. Restart the Xtract Universal Service, when performing a full migration or copying the `server` directory onto the different machine.

****
#### Related Links
- [Installation and Update](./installation-and-update)
- [Version History](https://kb.theobald-software.com/version-history/xtract-universal-version-history)