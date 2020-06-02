sequenceDiagram
Client->>Server: Request index page
Server-->>Client: Response with form (Enter URL of YT video)
Client->>Server: URL address inserted
Server-->>Client: Send info about YT video
alt Audio selected
Client->>Server: Download audio
Server-->>Server: Create directory with client ID
Server-->>Server: Download video from YT
Server-->>Server: Extract audio from video
Else Video selected
Client->>Server: Download video
Server-->>Server: Create directory with client ID
Server-->>Server: Download video from YT
end
Server-->>Client: Send file to client
Server-->>Client: Remove useless files after operation
