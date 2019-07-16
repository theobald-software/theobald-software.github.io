The XU server uses different ports for communication. The XU web server receives an extraction request via HTTP(S). The XU config server communicates with the XU Designer over a specified port.<br> 
The XU web server and the XU config server have a default port which could be changed. More information can be found in the chapter [Server Settings](./server-settings-xu3). 

If the XU service did not start because the default port is blocked please open the *general.json* file in the directory *config/server/[web/config]* in the XU installation directory and define a valid port.

All ports used in our documentation are working on our system. It is possible that on your system different ports are vaild. If some examples do not work in case of different ports please contact your administrator and ask for the correct ports.