---
layout: page
title: Troubleshooting DeltaQ
description: Troubleshooting DeltaQ
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=troubleshooting-deltaq
---

This document is a collection of possible problems, pitfalls and common problems when setting up or running DeltaQ. It is based on lots of support cases and will be extended on a regular basis. 

**I have crippled characters in the output, especially non-latin characters (like Chinese, Czech, etc.)**

Go to transaction SM59 and change the unicode flag from non-Unicode to Unicode.


**The customizing check is showing red indicators that are not related to missing authority objects.**

The 5 steps of customizing a DeltaQ are not done properly in SAP. Start from the beginning and do exactly (!) what is written in the documentation. If an error occurs during a step don't consider the step as done.

 
**The customizing check is completely green but during extraction no messages and no data packages are received from SAP. I can find red entries in transaction SM58 OR red IDocs in transaction WE02.**

The gateway host / gateway service settings in SM59 are not maintained properly. If you have a message server try to insert the message server details there, if not, put in the application server. Check carefully that these settings fit to the entries in the DeltaQ dialog.

 
**Sometimes message or data packages are lost which results in a timeout or inconsistent package verification. There are no entries in SM58 nor red IDocs in WE02. I'm using XTract IS.**

You're running two extractions at the same time. Avoid this! Running extractions at the same time only works fine when both have different logical destinations (e.g. XTRACT01 and XTRACT02) or both running within the same process (in the same SSIS package).

 
**Sometimes an extraction process freezes after a while and no more or almost none data packages are transferred anymore, which results in a timeout or inconsistant package error message and it is made 100% sure, that no other package is running in parallel.**

Both SAP and DeltaQ try to re-process stuck tRFC packages which might result in a situation similar to a dead lock. Do two things to avoid this: 1. Go to transaction SM59 -> Edit -> tRFC Options and set number of connection attempts to 30 and the time span between 2 tries to 2 minutes. 2. Go to DeltaQ settings and check the setting "Don't resend tRFC error automatically".

 
**Running the extraction in the preview window leads to an error.**

Avoid using the preview window. Large amount of data is received from within a windows dialog and a windows GUI process. Sometimes this causes strange behaviour due to complicated inference between windows os and the extraction thread. Use the real extraction and not the preview to find out if you have a real error.

 
**I have strange errors in general that happen sometimes for no good reason.**

First step is always to download the latest Xtract version. Maybe SAP changed something and you need a new version. Even if it is only 2 weeks old. The second step is always to exchange the 32- and 64-Bit version of the librfc32.dll on the system which might be unstable. Please check the [knowledge base](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/71/0/theobald--products-in-a-64-bit-environment) for download options for stable librfc32.dll versions.

 
**I get an "Error in Data Selection" from SAP**

If you use selection values, please check if the values are formatted properly. If this error only happens during delta updates, check if your OLTP source is able to handle delta updates (see transaction RSA2 for details). If this doesn't help, check the log output of the job in transaction SM37.

 
**During extraction I get an "Not Authorized for XXX" error even though I carefully applied all the authority objects listed in the knowledge base article for authority objects**

Some extractors add additional authority checks within the extractor that are not foreseeable. So the missing authority objects must be added.


**When running a DeltaQ extraction the following exception occurs: DataSource XXX has to be replicated .**

This Exception occurs when the DataSource XXX has to be replicated again. This could happen by former changes done on the SAP side. Solution:
1. Clicking the button "Activate" in the DeltaQ component dialog.
2. Turning on the Option "Automatic Synchronisation" in the Settings of the Xtract DeltaQ component to activate the package automatically at runtime.