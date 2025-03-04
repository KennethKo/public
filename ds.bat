@echo off

:: 20250304 0932
:: Quick and dirty batch script to pipe web text into my windows ollama.
:: Must have lynx installed in your wsl (or install native lynx properly w some kind of native windows sed to trim the header and references)

setlocal
set model=deepseek-r1:1.5b

IF [%1]==[] (
    echo "Running repl on %model%"
    ollama run %model%
) ELSE (
    echo "Using %model% to summarize %1"
    wsl lynx -dump %1^| sed -n "/^\w/,/^References$/p" | ollama run %model% "Please summarize this text"
)

endlocal
