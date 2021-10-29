---
ref: xu-advanced-techniques-12
layout: page
title: Backup and Migration
description: Backup and Migration
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 12
lang: en_GB
progressstate: 5
---

<!-- TOOD Better structure needed for explaining versions, backward compatibility, etc. -->

### Backup

{: .box-tip }
**Recommendation:** Make sure to create *regular* backups of the configuration files to save the work invested in designing and optimizing your data extraction processes.

A backup allows you to easily switch back to the previous product version, if needed. See also section [Installation and Update](../introduction/installation-and-update).

### Configuration Files
All configuration files of extractions, sources, destinations and the server are stored in the sub-directory `config` of the Xtract Universal program directory. <br>

`C:\Program Files\XtractUniversal\config` by default.

|Filename      | Description                                                                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`destinations`|Directory containing the [destinations](../destinations). Each `.json` file contains a destination of the same name.                                       |
|`extractions` |Directory containing the [extractions](../getting-started/define-a-table-extraction). Each sub-directory contains an extraction of the same name.          |
|`server`      |Directory containing the [server settings](../server/server-settings).                                                                                        |
|`sources`     |Directory containing [SAP connections](../introduction/sap-connection). Each sub-directory contains a source of the same name.                                              |
|`version.txt` |Text file containing the product version of the current configuration. See also [New Installation and Update](../introduction/installation-and-update#new-installation-and-update).|

### How do I Create a Backup?
Copy the complete `config` directory (`C:\Program Files\XtractUniversal\config` by default) of the machine running the Xtract Universal Service and store the files in safe and secure locations.
Optionally, copy the complete `logs` directory (`C:\Program Files\XtractUniversal\logs` by default) to create a backup of the log files. 
To backup your licence, create a copy of your `XtractUniversalLicense.json` file.



{: .box-warning }
**Warning! Data security**. <br>
Both `config` and `logs` directories may contain sensitive information.


### How to Restore a Backup?

{: .box-warning}
**Warning! Data Loss!** <br>
Restoring the backup of the `config` directory replaces the exisiting configuration. Make sure to remove the existing files before restoring the backups.

1. To restore the configuration files, remove the `config` directory from the program directory (`C:\Program Files\XtractUniversal` by deafult) of the machine running the Xtract Universal Service.
2. Copy the backup of the `config` directory into the program directory.
3. To restore the licence replace the `XtractUniversalLicense.json` file within the program directory with the backup.

### Migration to a Different Machine
Configuration files can be migrated partially or entirely (full migration).

Depending on your scenario it can make sense to conduct a partial migration - e.g., if you transport extractions from a test to a production environment.

When replacing a machine completely, conduct a full migration.

**Prerequisite**: Xtract Universal versions installed on both machines match.

{: .box-tip }
**Tip**: To check the version of your product, open the Designer, navigate to **Help > Info** or press **[F12]**.

{: .box-tip }
**Tip:** Install the matching version on the different machine by using the `XtractUniversalSetup.exe` from the program directory (`C:\Program Files\XtractUniversal` by default) of the current machine.

1. Create a backup of the `config` directory of the current machine.
2. Decide whether you need a partial or a full migration. <br> 
For a full migration you can restore the entire `config` directory on the different machine.
You can alternatively restore parts of the backup, by copying e.g., only the destinations or extractions directories.
3. Restart the [Xtract Universal Service](../server/start-server), when performing a full migration or copying the `server` directory onto the different machine.

{: .box-note }
**Note**: When migrating to a new server, a new license file must be issued for that server.
Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) for more information.

****
#### Related Links
- [Installation and Update](../introduction/installation-and-update)
- [Version History](https://kb.theobald-software.com/version-history/xtract-universal-version-history)
