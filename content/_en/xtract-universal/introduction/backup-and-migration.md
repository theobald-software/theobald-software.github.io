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
### Backup
Before installing a new product version or updating the current version, make sure to create a backup. Backup allows
you to easily switch back to the previous version of Xtract Universal, if needed. See also section [Installation and
Update](./installation-and-update).

All settings for extractions, sources, destinations, etc. are stored in the sub-directory *config*. 

#### Config Directory Files

|Filename | Description |
|:----|:---|
| Destinations directory | Directory containing the [destinations](../xu-destinations).|
| Extractions  directory | Directory containing the [extractions](../getting-started-xu/define-a-table-extraction).|
| Server directory | Directory containing the [server settings](../server/server-settings).|
| Sources directory | Directory containing [SAP connections](./sap-connection).|
| Version.txt | Text file containing the version number that aligns with the current configuration. See also [New Installation and Update](./installation-and-update#new-installation-and-update).|

### How do I Create a Backup?
Copy the complete *config* sub-directory, `C:\Program Files\XtractUniversal\config` (by default), of the machine running the Xtract Universal Service. 
The config directory contains all settings, extractions and connections. 
Note the product version you are currently using to be able to switch back to the same [version](https://kb.theobald-software.com/version-history/xtract-universal-version-history), in the case of problems.

### Migration to a Different Machine
Migrating to a different server is possible without losing any settings such as sources, usernames or passwords etc.

**Prerequisite**: Xtract Universal versions installed on both machines match.

{: .box-tip }
**Tip**: To check the version of your product, open the Designer, navigate to **Help > Info** or press **[F12]**.

{: .box-note }
**Note:** If your current version is not the latest version of Xtract Universal, install the matching version on the different machine using the `XtractUniversalSetup.exe` from the Xtract Universal directory: `C:\Program Files\XtractUniversal` (by default).

1. Make sure the versions of Xtract Universal on both machines match.
2. Create a backup of the config directory of the current machine.
3. Decide whether you need a partial or a full migration. <br> 
For a full migration you can restore the whole config directory (by default: `C:\Program Files\XtractUniversal\config`) on the different machine.
You can alternatively restore parts of the backup, by copying e.g., only the destinations or extractions directories.
4. Restart the Xtract Universal Service, when performing a full migration or copying the "sources" directory onto the different machine.

****
#### Related Links
- [Installation and Update](./installation-and-update)
- [Version History](https://kb.theobald-software.com/version-history/xtract-universal-version-history)