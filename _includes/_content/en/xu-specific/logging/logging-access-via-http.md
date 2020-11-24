The server provides access to various metadata and logging information via HTTP. <br>
The following examples use the following URL *http://localhost:8065/*.

**Listing of all defined extractions**

The following URL 

```
http://localhost:8065/
```
lists the defined extraction. 

Name,Type,Source,Destination,Connection,LastRun,RowCount,LastChange,Created<br>
Bilanz_GuV_Report,Report,erp,sqlserver,,,2016-07-25_03:05:55.250,2016-07-25_03:05:55.250<br>
BKPF,Table,erp,tableau,,,2016-07-26_06:04:38.239,2016-07-26_06:03:06.171<br>
BSEG,Table,erp,alteryx,2016-08-01_11:20:40.521,0,2016-07-21_04:22:12.681,2016-06-13_11:28:23.180<br>
demobexquery,BWCube,bw,powerbi,2016-07-29_09:43:13.675,210,2016-07-29_09:40:18.505,2016-05-23_02:25:31.273

The log contains the following columns:<br>
- **Name**: contains the name of the extraction.
- **Type**: contains the extraction type.
- **Source**: contains the name of the source connection.
- **Destination**: contains the name of the target connection.
- **LastRun**: contains the timestamp of the last execution. 
- **RowCount**: contains the number of last extracted data records. 
- **LastChange**: contains the timestamp of the last change. 
- **Created**: contains the timestamp of the creation. 

**List of all defined target connections**

The following URL
```
http://localhost:8065/destinations
```
lists the defined target connections. 

Name,Type,Host,Port,Database,User,Schema,Directory<br>
alteryx,Alteryx,,,,,,<br>
http-csv,CSV,,,,,,<br>
http-odata-atom,ODataAtom,,,,,<br>
sqlserver,SQLServer,localhost,1433,SAPDemos,test,,

The log contains the following columns:
- **Name**: contains the name of the target connection.
- **Type**: contains the connection type.
- **Host**: contains the host name, if applicable.
- **Port**: contains the port name, if applicable.
- **Database**: contains the database name, if applicable. 
- **User**: contains the user name in the connection, if applicable.  
- **Schema**: contains the schema name, if applicable.  
- **Directory**: contains the directory name, if applicable.

**Name of the result table/file for a specific timestamp**

Under
```
http://localhost:8065/ResultName?name=kna1&timestamp=2016-08-04_15:17:02.025
```
there is the name of the result table/file for a specific timestamp (this only works if the destination/extraction-specific settings have not been changed since the run) 

**Serverlog**

The server creates a separate log for each day with the corresponding timestamp. You can access the list of the server logs with the following parameter **req_type=server**:<br>

```
http://localhost:8065/log/?req_type=server&timestamp
```


**Server log of a specified timestamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=server &
timestamp=2010-04-28_00:00:00.000** :

```
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28_00:00:00.000
```

You can use the shortdate format instead of the timestamp format:

```
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28
```

**Log of a specified extraction**

You can access the log of a specified extraction (e.g. vardemo)  with the following  parameters: **req_type=extraction&name=vardemo** 

```
http://localhost:8065/log/?req_type=extraction&name=vardemo
```

**Log of a specified extraction at a specified timespamp**

You can access the server log of a specified timestamp (e.g. 2010-04-28_00:00:00.000) with the following parameters **req_type=extraction&name=vardemo & 
timestamp=2010-04-27_10:24:47.674 :**

```
http://localhost:8065/log/?req_type=extraction&name=vardemo&timestamp=2010-04-27_10:24:47.674
```

**All logs**

You can access the list of all logs with the following parameter **req_type=all**:

```
http://localhost:8065/log/?req_type=all
```

**All logs since n days**

You can access all logs since n days with the following parameters **req_type=all&past_days=n**:

```
http://localhost:8065/log/?req_type=all&past_days=1
```

**All logs since a specified timestamp**

You can access all logs since a specified timestamp with the following parameters **req_type=all&min=2010-04-28_09:49:17.831:**

```
http://localhost:8065/log/?req_type=all&min=2010-04-28_09:49:17.831
```

You can use a short date instead of a min timestamp.


**All logs until a specified timestamp**

You can access all logs until a specified timestamp with the following parameters  **req_type=all&min=2010-04-28_09:49:17.831**:

```
http://localhost:8065/log/?req_type=all&max=2010-04-28_09:49:17.831
```

You can use a short date instead of a min timestamp.
All logs between two specified timestamps

Use both parameters min and max to access all logs between two specified timestamps.

**Log content**

The log output contains the following columns:

**LineCount**: contains the row number.<br>
**Name**: contains the name of the extraction or the server name in case of a server log.<br>
**Timestamp**: contains the timestamp. <br>
**State**: contains a number between 2 and 4 for a server extraction or the number 5 for a server log.<br>
**StateDescr**: contains the state description.

| State | StateDescr       | Explanation                                                  |
|-------|------------------|--------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                   |
| 3     | FinishedNoErrors | The extraction has been finished without errors.             |
| 4     | FinishedErrors   | The extraction has been finished but with minimum one error. |
| 5     | NotAvailable     | The status for a server log.                                 |

- **LogLevel**: has one of the following values **Error**, **Info** or **Debug** and describes the log type.
- **Source**: is the technical name of the component that generates the log info.
- **Mode**: has the value console or service.
- **Message**: is the log content. 




