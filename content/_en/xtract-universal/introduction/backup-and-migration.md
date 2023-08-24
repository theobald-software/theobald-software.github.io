---
ref: xu-introduction-backup
layout: page
title: Backup and Migration
description: Backup and Migration
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 11
lang: en_GB
progressstate: 5
---

<!-- TOOD Better structure needed for explaining versions, backward compatibility, etc. -->

### Version Control

A version control system helps manage the data transfer from test environment to production environment by keeping track of all modifications. <br>
Git or Azure DevOps are version control systems that can be used to ensure:
- The deployment of new extractions, sources and destinations can **not** cause fundamental damage to the data load of the productive landscape.
- User rights and other features allow for changes to be checked and corrected in advance.
- Quick and easy rollbacks of changes.

For more information on how to set up version control with Xtract Universal, refer to the knowledge base article [Deploying Extractions Using Git Version Control](https://kb.theobald-software.com/xtract-universal/deploying-extractions-using-Git-version-control).

### Configuration Files
All configuration files of extractions, sources, destinations and the server are stored in the sub-directory `config` of the Xtract Universal program directory, e.g., `C:\Program Files\XtractUniversal\config`.
Use the `config` directory for setting up a [version control](#version-control) system or creating [manual backups](#manual-backups).

|Filename      | Description                                                                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`destinations`|Directory containing the [destinations](../destinations). Each `.json` file contains a destination of the same name.                                       |
|`extractions` |Directory containing the [extractions](../getting-started/define-a-table-extraction). Each sub-directory contains an extraction of the same name.          |
|`servers`      |Directory containing the [server settings](../server/server-settings).                                                                                        |
|`sources`     |Directory containing [SAP connections](../introduction/sap-connection). Each sub-directory contains a source of the same name.                                              |
|`version.txt` |Text file containing the product version of the current configuration. See also [New Installation and Update](../introduction/installation-and-update#new-installation-and-update).|

### Manual Backups

{: .box-tip }
**Recommendation:** Make sure to create *regular* backups of the configuration files to save the work invested in designing and optimizing your data extraction processes.

A backup allows you to easily switch back to the previous product version, if needed. See also section [Installation and Update](../introduction/installation-and-update).

#### How to Create a Backup
1. Copy the complete `config` directory (`C:\Program Files\XtractUniversal\config` by default) of the machine running the Xtract Universal Service and store the files in safe and secure locations.
2. Optional: copy the complete `logs` directory (`C:\Program Files\XtractUniversal\logs` by default) to create a backup of the log files. 
3. To backup your license, create a copy of your `XtractUniversalLicense.json` file.

{: .box-warning }
**Warning! Data security**. <br>
Both `config` and `logs` directories may contain sensitive information.

#### How to Restore a Backup

1. To restore the configuration files, remove the `config` directory from the program directory (`C:\Program Files\XtractUniversal` by deafult) of the machine running the Xtract Universal Service.
2. Copy the backup of the `config` directory into the program directory.
3. To restore the license, replace the `XtractUniversalLicense.json` file within the program directory with the backup.

{: .box-warning}
**Warning! Data Loss!** <br>
Restoring the backup of the `config` directory replaces the exisiting configuration. Make sure to remove the existing files before restoring the backups.

### Manual Migration to a Different Machine
Configuration files can be migrated partially or entirely (full migration).<br>
Depending on your scenario it can make sense to conduct a partial migration - e.g., if you transport extractions from a test to a production environment.
When replacing a machine completely, conduct a full migration.

{: .box-note }
**Note**: When migrating to a new server, a new license file must be issued for that server.
Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) for more information.

#### Prerequisite 
The same Xtract Universal versions must be installed on both machines.<br>
To install the matching version on the different machine, use the `XtractUniversalSetup.exe` from the program directory (`C:\Program Files\XtractUniversal`) of the current machine.
To check the version of your product, open the Designer and navigate to **Help > Info** or press **[F12]**.

#### How to Migrate
1. Create a backup of the `config` directory of the current machine. The default directory of the `config` folder is `C:\Program Files\XtractUniversal\config`.
2. Decide whether you need a partial or a full migration. <br> 
For a full migration restore the entire `config` directory on the different machine.<br>
For a partial migration restore parts of the backup, by copying subfolders from the `config` directory, e.g., only destination or extraction directories.
When copying single `config` folders, the `version.txt` file must be copied, too. The `version.txt`is located in the `config` folder.
3. Restart the [Xtract Universal Service](../server/start-server), when performing a full migration or copying the `server` directory onto the different machine.

{: .box-note }
**Note:** As of Xtract Universal version 5.0 SAP passwords are encrypted with a key that is derived from the Windows account that runs the XU service.
The passwords can only be accessed from the same service account, when restoring a backup or moving the files to a different machine. 
If the service account changes, passwords need to be re-entered manually.

****
#### Related Links
- [Installation and Update](../introduction/installation-and-update)
- [Version History](https://kb.theobald-software.com/version-history/xtract-universal-version-history)
