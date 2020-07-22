---
ref: xu-introduction-09
layout: page
title: Backup and Migration
description: Backup and Migration
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 9
lang: en_GB
---
### Backup
Before installing a new product version or updating the current version, make sure to create a backup. Backup allows
you to easily switch back to the previous version of Xtract Universal, if needed. See also section [Installation and
Update](./installation-and-update).

All settings for extractions, sources, destinations, etc. are stored in the sub-directory *config*. 

### How do I create a backup?
Copy of the complete program directory or at least the *config* sub-directory, `C:\Program Files\XtractUniversal\config` (by default), of the machine running the Xtract Universal Server (or Service). 
The config directory contains all settings, extractions and connections. 
Note the product version you are currently using to be able to switch back to the same [version](https://kb.theobald-software.com/version-history/xtract-universal-version-history), in the case of problems.


### Migration to Another Server
Migrating to another or different server is possible without losing any settings such as sources, usernames or passwords etc.

{: .box-tip }
**Tip**: To check the version of your product, open the Designer, navigate to **Help > Version History** or press **[F12]**.

1. Install the same version of Xtract Universal on a new / another server.
2. Create a backup of an old / former server.
3. Restore the backup on the new / another server, by copying the content of the *config* sub-directory of the old / former server to the *config* sub-directory of the new / another server.<br>
`C:\Program Files\XtractUniversal\config` (by default).
4. After restoring the backup on the new / another server, restart the new / another server.

****
#### Related Links
- [Installation and Update](./installation-and-update)
- [Version History](https://kb.theobald-software.com/version-history/xtract-universal-version-history)