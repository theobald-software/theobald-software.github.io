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
To save all the work you put into designing and optimizing your data extraction processes, *regular* backups of the configuration files are recommended.
Make sure to create a backup before installing a new version of Xtract Universal.
A backup allows you to easily switch back to the previous version, if needed. See also section [Installation and Update](./installation-and-update).

### Configuration Files
All configuration files of extractions, sources, destinations and the server are stored in the sub-directory `config` of the Xtract Universal program directory. 

|Filename      | Description                                                                                                                                                 |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`destinations`|Directory containing the [destinations](../xu-destinations). Each `.json` file contains a destination of the same name.                                       |
|`extractions` |Directory containing the [extractions](../getting-started-xu/define-a-table-extraction). Each sub-directory contains an extraction of the same name.          |
|`server`      |Directory containing the [server settings](../server/server-settings).                                                                                        |
|`sources`     |Directory containing [SAP connections](./sap-connection). Each sub-directory contains a source of the same name.                                              |
|`version.txt` |Text file containing the product version of this configuration. See also [New Installation and Update](./installation-and-update#new-installation-and-update).|

### How do I Create a Backup?
Copy the complete `config` directory (`C:\Program Files\XtractUniversal\config` by default) of the machine running the Xtract Universal Service and store it in safe and secure locations.
Optionally, copy the complete `logs` directory (`C:\Program Files\XtractUniversal\logs` by default) if you want to backup the log files.

{: .box-warning }
**Data security** Both `config` and `logs` directories may contain sensitive information.


<!-- TODO How to restore a backup-->
<!-- TODO explain how to enable version control by using git, mercurial, svn, etc. in the config dir -->

### Migration to a Different Machine
Configuration files can be migrated to a different machine in part or entirely.
<!-- TODO explain typical scenarios, e. g. from test to prod, replacing a machine entirely -->

**Prerequisite**: Xtract Universal versions installed on both machines match.

{: .box-tip }
**Tip**: To check the version of your product, open the Designer, navigate to **Help > Info** or press **[F12]**.

{: .box-tip }
**Tip:** Install the matching version on the different machine by using the `XtractUniversalSetup.exe` from the program directory (`C:\Program Files\XtractUniversal` by default) of the current machine.

<!-- TODO why so many differnt visual styles (prerequisite, tips, and step 1) all refering to matching versions? -->
1. Make sure the versions of Xtract Universal on both machines match.
2. Create a backup of the `config` directory of the current machine.
3. Decide whether you need a partial or a full migration. <br> 
For a full migration you can restore the whole config directory (by default: `C:\Program Files\XtractUniversal\config`) on the different machine.
You can alternatively restore parts of the backup, by copying e.g., only the destinations or extractions directories.
4. Restart the Xtract Universal Service, when performing a full migration or copying the `server` directory onto the different machine.

****
#### Related Links
- [Installation and Update](./installation-and-update)
- [Version History](https://kb.theobald-software.com/version-history/xtract-universal-version-history)