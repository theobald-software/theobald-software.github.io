
The installation can be initiated without the GUI in a non-interactive way via the Windows Command Prompt.

To execute the installation in silent mode, use the switch `--unattended`. <br>
Use the [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start) command with the `/wait` switch to wait until the installation is complete. 

**Example:**
```
start /wait XtractUniversalSetup.exe --unattended
```

{: .box-note }
**Note:** All switches are case sensitive.
